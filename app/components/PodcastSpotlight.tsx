"use client"

import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

export default function PodcastSpotlight() {
  const episodes = [
    {
      title: "From Startup Chaos to Systematic Success",
      description: "How to implement your first process improvement initiative",
      duration: "32 min",
      appleUrl: "https://apple.co/3TzaXKd",
      spotifyUrl: "https://open.spotify.com/show/6hYb0Rw3DxxIQbPGRK3x1a?si=9d39c3c134374097",
      youtubeUrl: "https://www.youtube.com/watch?v=E41oiY3Eaq8",
    },
    {
      title: "The Lean Startup Methodology Reimagined",
      description: "Modern approaches to validated learning and iteration",
      duration: "28 min",
      appleUrl: "https://apple.co/3TzaXKd",
      spotifyUrl: "https://open.spotify.com/show/6hYb0Rw3DxxIQbPGRK3x1a?si=9d39c3c134374097",
      youtubeUrl: "https://www.youtube.com/@yourprocessguy",
    },
    {
      title: "Building Scalable Operations from Day One",
      description: "Essential systems every startup needs to implement early",
      duration: "35 min",
      appleUrl: "https://apple.co/3TzaXKd",
      spotifyUrl: "https://open.spotify.com/show/6hYb0Rw3DxxIQbPGRK3x1a?si=9d39c3c134374097",
      youtubeUrl: "https://www.youtube.com/@yourprocessguy",
    },
  ]

  const handleEpisodeClick = (episode: (typeof episodes)[0]) => {
    // Create a simple modal or dropdown to let users choose platform
    const platform = window.confirm(
      `Listen to "${episode.title}" on:\n\nOK = Apple Podcasts\nCancel = Choose platform below`,
    )

    if (platform) {
      window.open(episode.appleUrl, "_blank", "noopener,noreferrer")
    } else {
      // Scroll to embedded players section
      const playersSection = document.querySelector(".embedded-players-section")
      if (playersSection) {
        playersSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section id="podcast" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Podcast Spotlight</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dive deep into process improvement strategies with industry experts and successful founders.
          </p>
        </div>

        {/* Episode Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {episodes.map((episode, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 hover:shadow-lg"
              onClick={() => handleEpisodeClick(episode)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  handleEpisodeClick(episode)
                }
              }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mr-4 hover:bg-gold/90 transition-colors">
                  <Play className="w-6 h-6 text-navy" />
                </div>
                <span className="text-sm text-gray-400">{episode.duration}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 hover:text-gold transition-colors">{episode.title}</h3>
              <p className="text-gray-300 text-sm">{episode.description}</p>
              <div className="mt-4 text-xs text-gold opacity-75">Click to listen →</div>
            </div>
          ))}
        </div>

        {/* Embedded Players Section */}
        <div className="mb-16 embedded-players-section">
          <h3 className="text-2xl font-bold text-center mb-12">Listen Now</h3>

          {/* YouTube Player */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-center text-gold">YouTube</h4>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/E41oiY3Eaq8"
                  title="The Kick-Off: Startup Process Improvement Mastery - Process-First Network"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Apple Podcasts Player */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-center text-gold">Apple Podcasts</h4>
            <div className="flex justify-center">
              <iframe
                title="Process-First Network on Apple Podcasts"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameBorder="0"
                height="450"
                style={{
                  width: "100%",
                  maxWidth: "660px",
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.podcasts.apple.com/us/podcast/process-first-network/id1825107981"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Spotify Player */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-center text-gold">Spotify</h4>
            <div className="flex justify-center">
              <iframe
                title="Process-First Network on Spotify"
                style={{
                  borderRadius: "12px",
                  width: "100%",
                  maxWidth: "660px",
                }}
                src="https://open.spotify.com/embed/show/6hYb0Rw3DxxIQbPGRK3x1a?utm_source=generator"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Platform Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-gold hover:bg-gold/90 text-navy font-semibold px-6 py-3"
            onClick={() => window.open("https://apple.co/3TzaXKd", "_blank", "noopener,noreferrer")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Apple Podcasts
          </Button>
          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-navy px-6 py-3 bg-transparent"
            onClick={() =>
              window.open(
                "https://open.spotify.com/show/6hYb0Rw3DxxIQbPGRK3x1a?si=9d39c3c134374097",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Spotify
          </Button>
          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-navy px-6 py-3 bg-transparent"
            onClick={() => window.open("https://www.youtube.com/@yourprocessguy", "_blank", "noopener,noreferrer")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>
      </div>
    </section>
  )
}
