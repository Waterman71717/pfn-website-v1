import MobileMenu from "./MobileMenu"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-navy border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-navy/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/images/pfn-youtube-logo.png"
                alt="Process-First Network Logo"
                width={300}
                height={90}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/#book" className="text-white hover:text-gold transition-colors font-medium">
              Book
            </Link>
            <Link href="/#podcast" className="text-white hover:text-gold transition-colors font-medium">
              Podcast
            </Link>
            <Link href="/community" className="text-white hover:text-gold transition-colors font-medium">
              Community
            </Link>
            <Link href="/#tools" className="text-white hover:text-gold transition-colors font-medium">
              Tools
            </Link>
            <Link href="/#about" className="text-white hover:text-gold transition-colors font-medium">
              About
            </Link>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
