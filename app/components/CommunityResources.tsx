import { Download, Lock, Star } from "lucide-react"

export default function CommunityResources() {
  const resources = [
    {
      title: "Member-Only Process Templates",
      description: "Advanced templates not available in the public toolkit",
      type: "Exclusive",
      count: "15+ templates",
      featured: true,
    },
    {
      title: "Detailed Case Studies",
      description: "In-depth analysis of successful process implementations",
      type: "Case Studies",
      count: "25+ studies",
      featured: false,
    },
    {
      title: "Implementation Playbooks",
      description: "Step-by-step guides for specific process improvements",
      type: "Playbooks",
      count: "10+ guides",
      featured: false,
    },
    {
      title: "Monthly Resource Drops",
      description: "New exclusive content delivered monthly to members",
      type: "Monthly",
      count: "12+ per year",
      featured: true,
    },
    {
      title: "Community-Created Content",
      description: "Resources shared by successful community members",
      type: "Community",
      count: "50+ resources",
      featured: false,
    },
    {
      title: "Expert Interview Recordings",
      description: "Exclusive interviews with process improvement experts",
      type: "Interviews",
      count: "20+ hours",
      featured: false,
    },
  ]

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Exclusive Member Resources</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Access premium content and resources available only to community members
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors relative ${
                resource.featured ? "ring-2 ring-gold" : ""
              }`}
            >
              {resource.featured && (
                <div className="absolute -top-2 -right-2 bg-gold text-navy px-2 py-1 rounded-full text-xs font-bold flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  FEATURED
                </div>
              )}

              <div className="flex items-center mb-4">
                <div className="bg-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-gold" />
                </div>
                <span className="text-xs text-gold font-medium bg-gold/10 px-2 py-1 rounded">{resource.type}</span>
              </div>

              <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{resource.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{resource.count}</span>
                <div className="flex items-center text-xs text-gold">
                  <Download className="w-3 h-3 mr-1" />
                  Members Only
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-800 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Unlock All Resources</h3>
            <p className="text-gray-300 mb-6">
              Join the community to access our complete library of exclusive resources and templates
            </p>
            <div className="flex items-center justify-center text-sm text-gray-400 mb-4">
              <Lock className="w-4 h-4 mr-2" />
              Premium content • Members only • Updated monthly
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
