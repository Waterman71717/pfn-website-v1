import { ExternalLink, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <Image
              src="/images/pfn-youtube-logo.png"
              alt="Process-First Network Logo"
              width={300}
              height={90}
              className="h-16 w-auto"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering startups to scale smart with proven process strategies. Transform chaos into systematic
              success.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/yourprocessguy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
                aria-label="Follow Emmanuel Bakare on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-gold">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-gold transition-colors">
                  Book
                </a>
              </li>
              <li>
                <a href="#podcast" className="hover:text-gold transition-colors">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-gold transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-gold transition-colors">
                  Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-gold">Listen & Follow</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="https://apple.co/3TzaXKd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center"
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/show/6hYb0Rw3DxxIQbPGRK3x1a?si=9d39c3c134374097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center"
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@yourprocessguy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center"
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yourprocessguy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center"
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-gold">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <a href="mailto:hello@startupprocessimprovement.com" className="hover:text-gold transition-colors">
                  hello@startupprocessimprovement.com
                </a>
              </p>
              <p>
                <a href="tel:512-640-9994" className="hover:text-gold transition-colors">
                  512-640-9994
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/yourprocessguy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Process-First Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
