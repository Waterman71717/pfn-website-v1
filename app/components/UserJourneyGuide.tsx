"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, BookOpen, Users, Download } from "lucide-react"

export default function UserJourneyGuide() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)

  const journeySteps = [
    {
      icon: BookOpen,
      title: "Learn the Methodology",
      description: "Start with our free sample ebook",
      action: "Download Sample",
      target: "#book",
    },
    {
      icon: Users,
      title: "Join the Community",
      description: "Connect with 500+ founders",
      action: "Join Free",
      target: "#community",
    },
    {
      icon: Download,
      title: "Get Tools & Templates",
      description: "Access our complete toolkit",
      action: "Browse Tools",
      target: "#tools",
    },
  ]

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-navy border border-gold rounded-lg p-4 max-w-sm z-50 shadow-2xl">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-gold text-sm">Your Journey Starts Here</h4>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3">
        {journeySteps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-2 rounded transition-colors ${
              index === currentStep ? "bg-gold/10" : "opacity-60"
            }`}
          >
            <step.icon className="w-5 h-5 text-gold" />
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{step.title}</div>
              <div className="text-xs text-gray-300">{step.description}</div>
            </div>
            {index === currentStep && (
              <Button
                size="sm"
                className="bg-gold hover:bg-gold/90 text-navy text-xs px-2 py-1"
                onClick={() => {
                  document.querySelector(step.target)?.scrollIntoView({ behavior: "smooth" })
                  setCurrentStep(Math.min(currentStep + 1, journeySteps.length - 1))
                }}
              >
                <ArrowRight className="w-3 h-3" />
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
