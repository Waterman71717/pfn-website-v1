"use client"

import { Button } from "@/components/ui/button"
import { Download, Star, Users, TrendingUp } from "lucide-react"
import Header from "./Header"

export default function Hero() {
  const scrollToPodcast = () => {
    const podcastSection = document.getElementById("podcast")
    if (podcastSection) {
      podcastSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToCommunity = () => {
    const communitySection = document.getElementById("community")
    if (communitySection) {
      communitySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadSampleEbook = () => {
    // Direct download link
    window.open("/downloads/startup_process_improvement_sample (1).pdf", "_blank")
  }

  return (
    <section className="bg-navy min-h-screen relative overflow-hidden">
      <Header />

      {/* Social Proof Banner */}
      <div className="bg-gold/10 border-b border-gold/20 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gold" />
              <span className="text-white font-medium">500+ Active Founders</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-white font-medium">4.9/5 Success Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-gold" />
              <span className="text-white font-medium">85% Efficiency Improvement</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Urgency Badge */}
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-6 py-3 text-sm">
              <span className="w-2 h-2 bg-gold rounded-full mr-3 animate-pulse"></span>
              <span className="text-gold font-semibold">Join 150+ startups scaling smarter</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto">
              <span className="text-gold gradient-text">Build Once.</span>
              <br />
              Scale Forever.
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The proven methodology that helped 150+ startups achieve 85% operational efficiency improvement.
              <span className="text-gold font-semibold block mt-2">No more firefighting.</span>
            </p>

            {/* Value Props Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto py-8">
              <div className="text-center">
                <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-2"></div>
                <span className="text-sm text-gray-300 font-medium">Lean + Agile + Kaizen</span>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-2"></div>
                <span className="text-sm text-gray-300 font-medium">Ready-to-use templates</span>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-2"></div>
                <span className="text-sm text-gray-300 font-medium">Active community support</span>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-2"></div>
                <span className="text-sm text-gray-300 font-medium">Expert guidance included</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button
                className="bg-gold hover:bg-gold/90 text-navy font-bold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                onClick={downloadSampleEbook}
              >
                <Download className="w-5 h-5 mr-3" />
                Get Free Sample (30+ Pages)
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-navy px-10 py-4 text-lg bg-transparent font-semibold"
                onClick={scrollToCommunity}
              >
                <Users className="w-5 h-5 mr-3" />
                Join Free Community
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 pt-12">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gold/20 rounded-full border-3 border-navy"></div>
                ))}
              </div>
              <div className="text-gray-300">
                <span className="text-gold font-bold text-lg">500+</span>
                <span className="ml-2">founders already scaling smarter</span>
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
