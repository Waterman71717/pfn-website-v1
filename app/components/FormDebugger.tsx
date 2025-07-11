"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function FormDebugger() {
  const [logs, setLogs] = useState<string[]>([])

  const testAllForms = async () => {
    const forms = [
      { name: "Community", endpoint: "/api/join-community", data: { name: "Test", email: "test@test.com" } },
      { name: "Newsletter", endpoint: "/api/newsletter", data: { email: "test@test.com" } },
      {
        name: "Feedback",
        endpoint: "/api/feedback",
        data: { name: "Test", email: "test@test.com", message: "Test message" },
      },
      {
        name: "Consultation",
        endpoint: "/api/consultation",
        data: {
          name: "Test",
          email: "test@test.com",
          company: "Test Co",
          stage: "mvp",
          challenge: "Test challenge",
        },
      },
    ]

    setLogs([])

    for (const form of forms) {
      try {
        const response = await fetch(form.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form.data),
        })

        const result = await response.json()
        const status = response.ok ? "✅" : "❌"
        setLogs((prev) => [...prev, `${status} ${form.name}: ${response.status} - ${JSON.stringify(result)}`])
      } catch (error) {
        setLogs((prev) => [...prev, `❌ ${form.name}: Error - ${error}`])
      }
    }
  }

  return (
    <div className="fixed top-4 right-4 bg-navy border border-gold rounded-lg p-4 max-w-md z-50">
      <h4 className="text-gold font-semibold mb-3">Form Tester</h4>

      <Button onClick={testAllForms} className="w-full bg-gold hover:bg-gold/90 text-navy text-sm mb-4">
        Test All Forms
      </Button>

      <div className="bg-gray-800 p-2 rounded text-xs max-h-64 overflow-auto">
        {logs.length === 0 ? (
          <p className="text-gray-400">Click to test forms...</p>
        ) : (
          logs.map((log, i) => (
            <div key={i} className="text-white mb-1 break-words">
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
