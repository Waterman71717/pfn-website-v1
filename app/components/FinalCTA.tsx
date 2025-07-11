"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function FinalCTA() {
  const downloadSampleEbook = () => {
    // Netlify CDN download
    window.open(
      "https://your-netlify-site.netlify.app/.netlify/functions/download?file=startup-process-improvement-sample.pdf",
      "_blank",
    )
  }

  const scrollToCommunity = () => {
    const communitySection = document.getElementById("community")
    if (communitySection) {
      communitySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-gold text-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">Start Your Process Revolution Today</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Join thousands of founders who are scaling smarter, not harder, with proven process strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              className="bg-navy hover:bg-navy/90 text-white font-semibold px-8 py-4 text-lg"
              onClick={downloadSampleEbook}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Sample Ebook
            </Button>
            <Button
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg bg-transparent"
              onClick={scrollToCommunity}
            >
              Join the Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
