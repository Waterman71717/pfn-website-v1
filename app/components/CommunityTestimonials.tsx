import { Star } from "lucide-react"

export default function CommunityTestimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechFlow",
      content:
        "The PFN community has been invaluable. I've connected with founders facing similar scaling challenges and learned from their experiences. The monthly Q&As with Emmanuel are pure gold.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder, GreenLogistics",
      content:
        "What I love most is how supportive everyone is. No question is too basic, and the shared resources have saved me months of trial and error. This community is a game-changer.",
      rating: 5,
    },
    {
      name: "Jennifer Park",
      title: "COO, DataSync",
      content:
        "The exclusive templates and case studies are worth the membership alone. But the real value is in the connections and ongoing support from fellow founders who 'get it'.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">What Members Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from founders who've transformed their startups with community support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-gold">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
