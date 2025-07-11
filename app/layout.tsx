import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import BackToTop from "./components/BackToTop"
import GoogleAnalytics from "./components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Startup Process Improvement | Process-First Network",
  description:
    "Build smarter, scale faster. Process-First Network gives founders the tools, community, and systems to turn startup chaos into cash.",
  keywords: "startup, process improvement, scaling, operations, lean, agile, kaizen, six sigma, Emmanuel Bakare",
  authors: [{ name: "Emmanuel Bakare" }],
  creator: "Emmanuel Bakare",
  publisher: "Process-First Network",
  openGraph: {
    title: "Process-First Network - The Process Revolution Starts Here",
    description: "Empowering startups to scale smart with proven process strategies.",
    url: "https://startupprocessimprovement.com",
    siteName: "Process-First Network",
    type: "website",
    images: [
      {
        url: "/images/book-cover.png",
        width: 300,
        height: 400,
        alt: "Startup Process Improvement Vol. 1 by Emmanuel Bakare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Process-First Network",
    description: "Build smarter, scale faster with proven process strategies.",
    images: ["/images/book-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#F4B731" />
        <meta name="msapplication-TileColor" content="#0D1A2B" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
