"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function StickyNavigation() {
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "book", label: "Book" },
    { id: "podcast", label: "Podcast" },
    { id: "community", label: "Community" },
    { id: "tools", label: "Tools" },
    { id: "about", label: "About" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-navy/90 backdrop-blur-sm border border-gold/20 rounded-lg p-2 space-y-2">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="ghost"
            size="sm"
            className={`w-full text-xs transition-all ${
              activeSection === section.id
                ? "bg-gold text-navy font-semibold"
                : "text-gray-300 hover:text-gold hover:bg-gold/10"
            }`}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
