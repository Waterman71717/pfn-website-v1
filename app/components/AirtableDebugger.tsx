"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function AirtableDebugger() {
  const [testResult, setTestResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const testConnection = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/test-airtable")
      const data = await response.json()
      setTestResult(data)
    } catch (error) {
      setTestResult({ error: "Failed to test connection", details: error })
    } finally {
      setIsLoading(false)
    }
  }

  const testCommunityForm = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/join-community", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test User",
          email: "test@example.com",
        }),
      })
      const data = await response.json()
      setTestResult(data)
    } catch (error) {
      setTestResult({ error: "Form test failed", details: error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 left-4 bg-navy border border-gold rounded-lg p-4 max-w-sm z-50">
      <h4 className="text-gold font-semibold mb-3">Airtable Debug</h4>

      <div className="space-y-2 mb-4">
        <Button
          size="sm"
          onClick={testConnection}
          disabled={isLoading}
          className="w-full bg-gold hover:bg-gold/90 text-navy text-xs"
        >
          {isLoading ? "Testing..." : "Test Connection"}
        </Button>

        <Button
          size="sm"
          onClick={testCommunityForm}
          disabled={isLoading}
          className="w-full bg-gold hover:bg-gold/90 text-navy text-xs"
        >
          {isLoading ? "Testing..." : "Test Form"}
        </Button>
      </div>

      {testResult && (
        <div className="bg-gray-800 p-2 rounded text-xs">
          <pre className="text-white overflow-auto max-h-32">{JSON.stringify(testResult, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
