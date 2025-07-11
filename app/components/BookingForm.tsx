"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { useState } from "react"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    stage: "",
    challenge: "",
    preferredTime: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          company: "",
          stage: "",
          challenge: "",
          preferredTime: "",
          message: "",
        })
      }
    } catch (error) {
      console.error("Error submitting consultation request:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-gold" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Book a Free Consultation</h2>
            <p className="text-xl text-gray-300">
              Get personalized advice on implementing process improvements in your startup. 30-minute session with
              Emmanuel.
            </p>
          </div>

          <div className="bg-navy p-8 rounded-lg">
            {submitted ? (
              <div className="text-center">
                <div className="text-gold text-6xl mb-4">📅</div>
                <h3 className="text-2xl font-semibold mb-2">Consultation Requested!</h3>
                <p className="text-gray-300">We'll contact you within 24 hours to schedule your session.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Select onValueChange={(value) => setFormData({ ...formData, stage: value })}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white" aria-label="Select startup stage">
                      <SelectValue placeholder="Startup Stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Idea Stage">Idea Stage</SelectItem>
                      <SelectItem value="Seed Stage">Seed Stage</SelectItem>
                      <SelectItem value="Series A">Series A</SelectItem>
                      <SelectItem value="Growth Stage">Growth Stage</SelectItem>
                      <SelectItem value="Mature">Mature</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Select onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white" aria-label="Select preferred time">
                    <SelectValue placeholder="Preferred Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9AM - 12PM CST)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (1PM - 5PM CST)</SelectItem>
                    <SelectItem value="evening">Evening (6PM - 8PM CST)</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="What's your biggest operational challenge right now?"
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  required
                  rows={3}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />

                <Textarea
                  placeholder="Additional message (optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={2}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold py-3 text-lg"
                >
                  {isSubmitting ? "Booking..." : "Book Free Consultation"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
