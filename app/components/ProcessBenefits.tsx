import { Wrench, Briefcase, TrendingUp, Settings, Brain } from "lucide-react"

export default function ProcessBenefits() {
  const benefits = [
    {
      icon: Wrench,
      title: "Fix Before Breaking",
      description: "Identify and resolve issues before they become critical problems",
    },
    {
      icon: Briefcase,
      title: "Eliminate Waste",
      description: "Remove inefficiencies and focus resources on what truly matters",
    },
    {
      icon: TrendingUp,
      title: "Scale with Confidence",
      description: "Build systems that grow with your business, not against it",
    },
    {
      icon: Settings,
      title: "Build Enabling Systems",
      description: "Create processes that empower your team to do their best work",
    },
    {
      icon: Brain,
      title: "Unified Magic",
      description: "Lean + Agile + Kaizen + Six Sigma methodologies combined",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Process-First Benefits</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your startup with proven methodologies that deliver measurable results
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-navy p-6 rounded-lg hover:bg-navy/80 transition-colors group">
              <div className="bg-gold/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20">
                <benefit.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
