"use client"

import { Calendar, Clock, Users, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CommunityEvents() {
  const events = [
    {
      title: "Monthly Live Q&A with Emmanuel",
      date: "Every 3rd Thursday",
      time: "2:00 PM CST",
      type: "Live Session",
      description: "Ask your process improvement questions directly to Emmanuel and get expert guidance.",
      attendees: "50-80 members",
    },
    {
      title: "Founder Success Stories",
      date: "Every 1st Tuesday",
      time: "1:00 PM CST",
      type: "Case Study",
      description: "Learn from community members who've successfully implemented process improvements.",
      attendees: "30-50 members",
    },
    {
      title: "Process Implementation Workshop",
      date: "Monthly",
      time: "11:00 AM CST",
      type: "Workshop",
      description: "Hands-on workshop to implement specific process improvements in your startup.",
      attendees: "20-30 members",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Community Events</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Regular events to help you learn, connect, and implement process improvements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <div key={index} className="bg-navy p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Video className="w-6 h-6 text-gold" />
                </div>
                <span className="text-xs text-gold font-medium bg-gold/10 px-2 py-1 rounded">{event.type}</span>
              </div>

              <h3 className="text-lg font-semibold mb-3">{event.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{event.description}</p>

              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {event.attendees}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-navy p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Never Miss an Event</h3>
            <p className="text-gray-300 mb-6">
              Join our community to get calendar invites and reminders for all upcoming events
            </p>
            <Button
              className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-3"
              onClick={() => {
                const joinSection = document.getElementById("community")
                if (joinSection) {
                  joinSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
