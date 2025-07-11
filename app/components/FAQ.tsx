"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What makes PFN different from other business improvement programs?",
      answer:
        "PFN is specifically designed for startups, combining Lean, Agile, Kaizen, and Six Sigma methodologies into a practical framework that works in fast-paced, resource-constrained environments. We focus on implementation, not just theory.",
    },
    {
      question: "Do I need prior experience with process improvement?",
      answer:
        "Not at all! Our materials are designed for founders at any stage. We start with fundamentals and provide step-by-step guidance. The community is also incredibly supportive for beginners.",
    },
    {
      question: "How quickly can I see results?",
      answer:
        "Most founders see initial improvements within 2-4 weeks of implementing our basic frameworks. Significant operational changes typically occur within 3-6 months, depending on your startup's complexity.",
    },
    {
      question: "Is the community active and helpful?",
      answer:
        "We have over 500 active founders who regularly share experiences, ask questions, and provide support. Emmanuel also hosts monthly live Q&A sessions for direct guidance.",
    },
    {
      question: "What's included in the Starter Kit?",
      answer:
        "The Starter Kit includes process mapping templates, metrics tracking sheets, daily huddle worksheets, a process maturity assessment, and our curated tool recommendations. Everything you need to get started immediately.",
    },
    {
      question: "Can I implement these processes with a small team?",
      answer:
        "Yes! Our methodologies are designed to scale with your team size. Many of our most successful implementations started with teams of 3-5 people. The key is starting simple and building systematically.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about getting started with PFN
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-navy rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-navy/80 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gold flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
