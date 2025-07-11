exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    }
  }

  try {
    const { name, email } = JSON.parse(event.body)

    // Validate input
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Name and email are required" }),
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid email format" }),
      }
    }

    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY

    if (!AIRTABLE_BASE_ID || !AIRTABLE_API_KEY) {
      console.error("Missing Airtable configuration")
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server configuration error" }),
      }
    }

    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Community_Signups`, {
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
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({ success: true, message: "Successfully joined the community!" }),
      }
    } else {
      const errorData = await response.json()
      console.error("Airtable error:", errorData)
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to join community", details: errorData }),
      }
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error", details: error.message }),
    }
  }
}
