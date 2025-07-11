export async function POST(request: Request) {
  try {
    const { email, score, level, answers } = await request.json()

    // Validate input
    if (!email || score === undefined || !level || !answers) {
      return Response.json({ error: "All assessment data is required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 })
    }

    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
    const AIRTABLE_TABLE_NAME = "Process_Assessments"
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY

    if (!AIRTABLE_BASE_ID || !AIRTABLE_API_KEY) {
      console.error("Missing Airtable configuration")
      return Response.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Calculate lead score based on assessment level
    const levelScores = {
      Beginner: 35,
      Intermediate: 45,
      Advanced: 55,
    }

    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Email: email.toLowerCase().trim(),
          Score: score,
          "Maturity Level": level,
          "Assessment Date": new Date().toISOString(),
          Answers: JSON.stringify(answers),
          Source: "Website - Process Assessment",
          "Follow Up Required": level === "Beginner" ? "Yes" : "No",
          "Lead Score": levelScores[level as keyof typeof levelScores] || 35,
          Priority: level === "Beginner" ? "High" : "Medium",
        },
      }),
    })

    if (response.ok) {
      return Response.json({ success: true, message: "Assessment results saved successfully!" })
    } else {
      const errorData = await response.json()
      console.error("Airtable error:", errorData)
      return Response.json({ error: "Failed to save assessment" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error saving assessment:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
