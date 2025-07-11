import { Shield, Award, Users, Clock } from "lucide-react"

export default function TrustSignals() {
  const signals = [
    {
      icon: Shield,
      text: "Money-Back Guarantee",
      subtext: "30-day full refund",
    },
    {
      icon: Award,
      text: "Proven Results",
      subtext: "150+ successful startups",
    },
    {
      icon: Users,
      text: "Active Community",
      subtext: "500+ engaged founders",
    },
    {
      icon: Clock,
      text: "Quick Implementation",
      subtext: "Results in 2-4 weeks",
    },
  ]

  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {signals.map((signal, index) => (
            <div key={index} className="flex items-center space-x-3 text-center md:text-left">
              <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <signal.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">{signal.text}</div>
                <div className="text-xs text-gray-400">{signal.subtext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
