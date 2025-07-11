"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export default function AboutBook() {
  const downloadSampleEbook = () => {
    // Direct download link
    window.open("/downloads/startup_process_improvement_sample (1).pdf", "_blank")
  }

  return (
    <section id="book" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/cover.webp"
                  alt="Startup Process Improvement Vol. 1: Turning Chaos into Cash by Emmanuel Bakare"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gold/20 rounded-lg blur-xl -z-10"></div>
              </div>
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold">Startup Process Improvement Vol. 1</h2>
              <h3 className="text-2xl lg:text-3xl text-gold">Turning Chaos into Cash</h3>
              <blockquote className="text-xl italic text-gray-300 border-l-4 border-gold pl-6">
                "From chaos to cash—this is the definitive playbook for scaling startups with systems."
              </blockquote>
              <p className="text-lg text-gray-300 leading-relaxed">
                Discover the proven methodologies that have helped over 150 startups transform their operations. This
                comprehensive guide combines Lean, Agile, Kaizen, and Six Sigma principles into a practical framework
                designed specifically for startup environments.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">What you'll learn:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center justify-center lg:justify-start">
                    <span className="text-gold mr-2">✓</span> Process mapping for startup environments
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <span className="text-gold mr-2">✓</span> Waste elimination strategies
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <span className="text-gold mr-2">✓</span> Scalable system design
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <span className="text-gold mr-2">✓</span> Metrics that matter for growth
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-3 text-lg">
                  <a href="https://a.co/d/3V3gxmi" target="_blank" rel="noopener noreferrer">
                    Buy on Amazon
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-navy px-8 py-3 text-lg bg-transparent"
                  onClick={downloadSampleEbook}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Sample
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
