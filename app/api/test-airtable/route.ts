export async function GET() {
  try {
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY

    console.log("Environment check:")
    console.log("AIRTABLE_BASE_ID:", AIRTABLE_BASE_ID ? "✅ Set" : "❌ Missing")
    console.log("AIRTABLE_API_KEY:", AIRTABLE_API_KEY ? "✅ Set" : "❌ Missing")

    if (!AIRTABLE_BASE_ID || !AIRTABLE_API_KEY) {
      return Response.json(
        {
          error: "Missing environment variables",
          details: {
            baseId: !!AIRTABLE_BASE_ID,
            apiKey: !!AIRTABLE_API_KEY,
          },
        },
        { status: 500 },
      )
    }

    // Test API connection
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Community_Signups?maxRecords=1`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
    })

    const data = await response.json()

    if (response.ok) {
      return Response.json({
        success: true,
        message: "Airtable connection working!",
        recordCount: data.records?.length || 0,
      })
    } else {
      return Response.json(
        {
          error: "Airtable API error",
          details: data,
        },
        { status: response.status },
      )
    }
  } catch (error) {
    console.error("Test error:", error)
    return Response.json(
      {
        error: "Connection failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
