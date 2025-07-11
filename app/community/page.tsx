import Header from "../components/Header"
import Footer from "../components/Footer"
import CommunityHero from "../components/CommunityHero"
import CommunityFeatures from "../components/CommunityFeatures"
import CommunityStats from "../components/CommunityStats"
import CommunityTestimonials from "../components/CommunityTestimonials"
import JoinCommunity from "../components/JoinCommunity"
import CommunityResources from "../components/CommunityResources"
import CommunityEvents from "../components/CommunityEvents"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community | Process-First Network",
  description:
    "Join 500+ startup founders in the Process-First Network community. Share experiences, get support, and access exclusive resources for scaling your startup.",
  openGraph: {
    title: "Process-First Network Community",
    description: "Connect with like-minded founders and scale your startup with proven process strategies.",
    url: "https://startupprocessimprovement.com/community",
  },
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-navy text-white">
      <Header />
      <CommunityHero />
      <CommunityStats />
      <CommunityFeatures />
      <CommunityTestimonials />
      <CommunityEvents />
      <CommunityResources />
      <JoinCommunity />
      <Footer />
    </main>
  )
}
