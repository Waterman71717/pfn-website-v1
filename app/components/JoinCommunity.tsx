"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function JoinCommunity() {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("Submitting form data:", formData) // Debug log

      const response = await fetch("/api/join-community", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("Response status:", response.status) // Debug log
      console.log("Response ok:", response.ok) // Debug log

      const responseData = await response.json()
      console.log("Response data:", responseData) // Debug log

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "" })
        console.log("Form submitted successfully!") // Debug log
      } else {
        console.error("Form submission failed:", responseData)
        alert(`Error: ${responseData.error || "Unknown error"}`)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert(`Network error: ${error}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="community" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Community</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Connect with like-minded founders, share experiences, and get exclusive access to process improvement
            resources, templates, and live Q&A sessions with Emmanuel.
          </p>
          <div className="bg-navy p-8 rounded-lg">
            {submitted ? (
              <div className="text-center">
                <div className="text-gold text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-semibold mb-2">Welcome to PFN!</h3>
                <p className="text-gray-300">Check your email for next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold py-3 text-lg"
                >
                  {isSubmitting ? "Joining..." : "Join Free"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
