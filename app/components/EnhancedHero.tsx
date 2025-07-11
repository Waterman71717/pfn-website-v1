"use client"

import { Button } from "@/components/ui/button"
import { Settings, Mic, BookOpen, Download, Star, Users, TrendingUp } from "lucide-react"
import Header from "./Header"

export default function EnhancedHero() {
  const scrollToPodcast = () => {
    const podcastSection = document.getElementById("podcast")
    if (podcastSection) {
      podcastSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadSampleEbook = () => {
    const link = document.createElement("a")
    link.href = "/downloads/startup-process-improvement-sample.pdf"
    link.download = "Startup-Process-Improvement-Sample-Edition.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="bg-navy min-h-screen relative overflow-hidden">
      <Header />

      {/* Social Proof Banner */}
      <div className="bg-gold/10 border-b border-gold/20 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-gold" />
              <span className="text-white">500+ Active Founders</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-white">4.9/5 Success Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-gold" />
              <span className="text-white">85% Efficiency Improvement</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            {/* Urgency Badge */}
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-gold rounded-full mr-2 animate-pulse"></span>
              <span className="text-gold font-medium">Join 150+ startups scaling smarter</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Turn Startup Chaos Into <span className="text-gold gradient-text">Systematic Cash</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              The proven methodology that helped 150+ startups achieve 85% operational efficiency improvement.
              <span className="text-gold font-semibold"> No more firefighting.</span>
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-gray-300">Lean + Agile + Kaizen</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-gray-300">Ready-to-use templates</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-gray-300">Active community support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-gray-300">Expert guidance included</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                onClick={downloadSampleEbook}
              >
                <Download className="w-5 h-5 mr-2" />
                Get Free Sample (30+ Pages)
              </Button>
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-navy px-8 py-4 text-lg bg-transparent"
                onClick={scrollToPodcast}
              >
                <Mic className="w-5 h-5 mr-2" />
                Listen to Success Stories
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gold/20 rounded-full border-2 border-navy"></div>
                ))}
              </div>
              <div className="text-sm text-gray-300">
                <span className="text-gold font-semibold">500+</span> founders already scaling smarter
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gold/10 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-48 h-48 bg-gold/20 rounded-full flex items-center justify-center">
                  <Settings className="w-32 h-32 text-gold animate-spin" style={{ animationDuration: "8s" }} />
                </div>
              </div>
              <Mic className="w-16 h-16 text-white absolute -top-4 -right-4 animate-bounce" />
              <BookOpen className="w-16 h-16 text-gold absolute -bottom-4 -left-4 animate-pulse" />

              {/* Success Metrics Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="bg-navy/80 backdrop-blur-sm rounded-lg p-3 border border-gold/30">
                  <div className="text-2xl font-bold text-gold">85%</div>
                  <div className="text-xs text-white">Efficiency Gain</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
