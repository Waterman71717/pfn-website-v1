"use client"

import { useState, useEffect } from "react"
import { Users, Download, MessageCircle } from "lucide-react"

export default function SocialProof() {
  const [stats, setStats] = useState({
    activeUsers: 487,
    downloads: 1243,
    discussions: 89,
  })

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats((prev) => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        downloads: prev.downloads + Math.floor(Math.random() * 5),
        discussions: prev.discussions + Math.floor(Math.random() * 2),
      }))
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-4 left-4 bg-navy/90 backdrop-blur-sm border border-gold/20 rounded-lg p-3 z-40 hidden lg:block">
      <div className="space-y-2 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <Users className="w-3 h-3 text-gold" />
          <span className="text-white">{stats.activeUsers} online now</span>
        </div>
        <div className="flex items-center space-x-2">
          <Download className="w-3 h-3 text-gold" />
          <span className="text-gray-300">{stats.downloads} downloads today</span>
        </div>
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-3 h-3 text-gold" />
          <span className="text-gray-300">{stats.discussions} active discussions</span>
        </div>
      </div>
    </div>
  )
}
