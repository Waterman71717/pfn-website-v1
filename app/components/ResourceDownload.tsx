"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, FileText, CheckCircle, Star } from "lucide-react"
import { useState } from "react"

interface ResourceDownloadProps {
  title: string
  description: string
  resourceType: string
  fileName: string
  featured?: boolean
}

export default function ResourceDownload({
  title,
  description,
  resourceType,
  fileName,
  featured = false,
}: ResourceDownloadProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Track download in Airtable
      const response = await fetch("/api/resource-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          resource: title,
          resourceType,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail("")
        // Trigger direct file download
        window.open(`/downloads/${fileName}`, "_blank")
      } else {
        alert("Error: Failed to process download")
      }
    } catch (error) {
      console.error("Error downloading resource:", error)
      alert("Error: Failed to process download")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={`bg-navy p-6 rounded-lg hover:bg-navy/80 transition-colors relative ${featured ? "ring-2 ring-gold" : ""}`}
    >
      {featured && (
        <div className="absolute -top-2 -right-2 bg-gold text-navy px-2 py-1 rounded-full text-xs font-bold flex items-center">
          <Star className="w-3 h-3 mr-1" />
          FEATURED
        </div>
      )}

      <div className="flex items-center mb-4">
        <div className="bg-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
          <FileText className="w-6 h-6 text-gold" />
        </div>
        <span className="text-xs text-gold font-medium bg-gold/10 px-2 py-1 rounded">{resourceType}</span>
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>

      {submitted ? (
        <div className="text-center py-4">
          <CheckCircle className="w-8 h-8 text-gold mx-auto mb-2" />
          <p className="text-sm text-gray-300">Download started! Check your downloads folder.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Enter email for download"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            size="sm"
            className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold"
          >
            <Download className="w-4 h-4 mr-2" />
            {isSubmitting ? "Processing..." : "Download"}
          </Button>
        </form>
      )}
    </div>
  )
}
