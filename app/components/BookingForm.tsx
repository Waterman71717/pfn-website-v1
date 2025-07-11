export async function POST(request: Request) {
  try {
    const { name, email, company, stage, challenge, preferredTime, message } = await request.json()

    // Validate input
    if (!name || !email || !company || !stage || !challenge) {
      return Response.json({ error: "All required fields must be filled" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 })
    }

    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
    const AIRTABLE_TABLE_NAME = "Consultation_Requests"
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY

    if (!AIRTABLE_BASE_ID || !AIRTABLE_API_KEY) {
      console.error("Missing Airtable configuration")
      return Response.json({ error: "Server configuration error" }, { status: 500 })
    }

    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: name.trim(),
          Email: email.toLowerCase().trim(),
          Company: company.trim(),
          Stage: stage,
          Challenge: challenge.trim(),
          "Preferred Time": preferredTime,
          Message: message?.trim() || "",
          Source: "Website - Consultation Request",
        },
      }),
    })

    if (response.ok) {
      return Response.json({ success: true, message: "Consultation request submitted successfully!" })
    } else {
      const errorData = await response.json()
      console.error("Airtable error:", errorData)
      return Response.json({ error: "Failed to submit consultation request" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error submitting consultation request:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
