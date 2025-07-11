export async function POST(request: Request) {
  try {
    const { name, email, company, stage, challenge, preferredTime, message } = await request.json()

    // Validate required fields
    if (!name || !email || !company || !stage || !challenge) {
      return Response.json({ error: "All required fields must be filled" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 })
    }

    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
    const AIRTABLE_TABLE_NAME = "Consultations"
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY

    if (!AIRTABLE_BASE_ID || !AIRTABLE_API_KEY) {
      console.error("Missing Airtable configuration")
      return Response.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Calculate lead score based on startup stage
    const stageScores = {
      idea: 20,
      mvp: 30,
      early: 40,
      growth: 50,
      scale: 60,
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
          "Startup Stage": stage,
          "Main Challenge": challenge.trim(),
          "Preferred Time": preferredTime || "Not specified",
          Message: message?.trim() || "",
          "Request Date": new Date().toISOString(),
          Status: "Pending",
          Source: "Website - Consultation Request",
          Priority: stage === "growth" || stage === "scale" ? "High" : "Medium",
          "Lead Score": stageScores[stage as keyof typeof stageScores] || 30,
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
