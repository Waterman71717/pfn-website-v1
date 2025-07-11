"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

export default function AboutEmmanuel() {
  return (
    <section id="about" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Emmanuel Bakare</h2>
            <div className="space-y-4">
              <p className="text-xl text-gold font-semibold">Author. Cloud Tech Leader. 150+ Startups Guided.</p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Emmanuel Bakare is a seasoned technology leader and process improvement expert who has guided over 150
                startups through their scaling challenges. As the founder of AquaHose and author of "Startup Process
                Improvement Vol. 1," he brings real-world experience from both successful exits and hard-learned
                lessons.
              </p>
              <blockquote className="text-lg italic text-gray-300 border-l-4 border-gold pl-6">
                "I created PFN to help founders avoid the chaos I faced scaling AquaHose. Every startup deserves to grow
                with intention, not just intensity."
              </blockquote>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Expertise:</h4>
                <ul className="space-y-1 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-gold mr-2">•</span> Cloud Architecture & DevOps
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">•</span> Lean & Agile Methodologies
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">•</span> Process Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">•</span> Startup Operations
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-navy bg-transparent"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/yourprocessguy", "_blank", "noopener,noreferrer")
                  }
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/emmanuel-bakare.png"
                alt="Emmanuel Bakare - Author and Founder of Process-First Network"
                width={400}
                height={400}
                className="rounded-full"
              />
              <div className="absolute -inset-4 bg-gold/20 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
