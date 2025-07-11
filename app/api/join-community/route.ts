export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    // Validate input
    if (!name || !email) {
      return Response.json({ error: "Name and email are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 })
    }

    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
    const AIRTABLE_TABLE_NAME = "Community_Signups"
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
          "Signup Date": new Date().toISOString(),
          Source: "Website - Community Signup",
          Status: "Active",
          "Lead Score": 25,
        },
      }),
    })

    if (response.ok) {
      return Response.json({ success: true, message: "Successfully joined the community!" })
    } else {
      const errorData = await response.json()
      console.error("Airtable error:", errorData)
      return Response.json({ error: "Failed to join community" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error submitting to Airtable:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
