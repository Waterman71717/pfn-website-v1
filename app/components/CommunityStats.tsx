import { TrendingUp, Users, MessageCircle, Star } from "lucide-react"

export default function CommunityStats() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Active Members",
      description: "Founders from 40+ countries",
    },
    {
      icon: MessageCircle,
      number: "95%",
      label: "Response Rate",
      description: "Questions answered within 24 hours",
    },
    {
      icon: TrendingUp,
      number: "73%",
      label: "Success Rate",
      description: "Members report significant improvements",
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Community Rating",
      description: "Average member satisfaction score",
    },
  ]

  return (
    <section className="py-16 bg-gold text-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
          <p className="text-lg">Real results from real founders in our community</p>
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
