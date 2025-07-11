import { MessageSquare, Video, FileText, Award, Clock, Shield } from "lucide-react"

export default function CommunityFeatures() {
  const features = [
    {
      icon: MessageSquare,
      title: "Discussion Forums",
      description:
        "Connect with founders facing similar challenges. Share experiences, ask questions, and get practical advice from the community.",
    },
    {
      icon: Video,
      title: "Monthly Live Q&A",
      description:
        "Join Emmanuel for monthly live sessions where he answers your process improvement questions and shares new strategies.",
    },
    {
      icon: FileText,
      title: "Exclusive Resources",
      description: "Access member-only templates, case studies, and implementation guides not available anywhere else.",
    },
    {
      icon: Award,
      title: "Success Stories",
      description: "Learn from detailed case studies of community members who've successfully scaled their startups.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Get help anytime from our active community. Someone's always online to help with your process challenges.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Share sensitive business challenges in our moderated, confidential community space.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Community Features</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to connect, learn, and grow with fellow startup founders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-navy p-6 rounded-lg hover:bg-navy/80 transition-colors">
              <div className="bg-gold/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
