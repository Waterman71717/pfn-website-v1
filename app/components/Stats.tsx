import { TrendingUp, Users, BookOpen, Award } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: "150+",
      label: "Startups Guided",
      description: "Successfully scaled with our methodologies",
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Efficiency Improvement",
      description: "Average operational efficiency gain",
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "Community Members",
      description: "Active founders in our network",
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "Success Rating",
      description: "From founders who implemented our processes",
    },
  ]

  return (
    <section className="py-20 bg-gold text-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
          <p className="text-xl max-w-2xl mx-auto">Numbers that matter - real impact on real startups</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-navy" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm opacity-80">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
