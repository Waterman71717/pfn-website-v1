"use client"

import { Button } from "@/components/ui/button"
import { Users, MessageCircle, Calendar, BookOpen } from "lucide-react"

export default function CommunityHero() {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Welcome to the <span className="text-gold">PFN Community</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Join 500+ startup founders who are transforming their operations with proven process strategies. Connect,
            learn, and grow together in our supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-3 text-lg"
              onClick={() => {
                const joinSection = document.getElementById("community")
                if (joinSection) {
                  joinSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <Users className="w-4 h-4 mr-2" />
              Join Free Today
            </Button>
            <Button
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-navy px-8 py-3 text-lg bg-transparent"
              onClick={() => {
                // For now, scroll to community section - can be updated with actual discussion platform
                const communitySection = document.getElementById("community")
                if (communitySection) {
                  communitySection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              View Discussions
            </Button>
          </div>
        </div>

        {/* Community Highlights */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-gold" />
            </div>
            <div className="text-3xl font-bold text-gold mb-2">500+</div>
            <div className="text-gray-300">Active Members</div>
          </div>
          <div className="text-center">
            <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-gold" />
            </div>
            <div className="text-3xl font-bold text-gold mb-2">1,200+</div>
            <div className="text-gray-300">Discussions</div>
          </div>
          <div className="text-center">
            <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-gold" />
            </div>
            <div className="text-3xl font-bold text-gold mb-2">24</div>
            <div className="text-gray-300">Monthly Events</div>
          </div>
          <div className="text-center">
            <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-gold" />
            </div>
            <div className="text-3xl font-bold text-gold mb-2">50+</div>
            <div className="text-gray-300">Exclusive Resources</div>
          </div>
        </div>
      </div>
    </section>
  )
}
