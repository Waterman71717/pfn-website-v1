import { BookOpen, Headphones, Users, Wrench } from "lucide-react"

export default function WhatIsPFN() {
  const pillars = [
    { icon: BookOpen, title: "Ebook", description: "Comprehensive process guides" },
    { icon: Headphones, title: "Podcast", description: "Expert insights & interviews" },
    { icon: Users, title: "Community", description: "Connect with like-minded founders" },
    { icon: Wrench, title: "Tools & Templates", description: "Ready-to-use resources" },
  ]

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Is Process-First Network?</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              PFN is a comprehensive ecosystem designed to help startup founders transform operational chaos into
              systematic success. We provide the community, tools, and knowledge you need to scale sustainably through
              proven process strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20">
                  <pillar.icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-gray-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
