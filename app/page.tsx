import Hero from "./components/Hero"
import WhatIsPFN from "./components/WhatIsPFN"
import AboutBook from "./components/AboutBook"
import PodcastSpotlight from "./components/PodcastSpotlight"
import JoinCommunity from "./components/JoinCommunity"
import AboutEmmanuel from "./components/AboutEmmanuel"
import ProcessBenefits from "./components/ProcessBenefits"
import ToolsResources from "./components/ToolsResources"
import FeedbackForm from "./components/FeedbackForm"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

import Stats from "./components/Stats"
import FAQ from "./components/FAQ"
import Newsletter from "./components/Newsletter"
import BookingForm from "./components/BookingForm"
import ProcessAssessment from "./components/ProcessAssessment"

// UX Enhancement Components (removed UserJourneyGuide)
import ProgressIndicator from "./components/ProgressIndicator"
import StickyNavigation from "./components/StickyNavigation"
import TrustSignals from "./components/TrustSignals"
import SocialProof from "./components/SocialProof"

import AirtableDebugger from "./components/AirtableDebugger"
import FormDebugger from "./components/FormDebugger"

export default function Home() {
  return (
    <main className="min-h-screen bg-navy text-white">
      {/* UX Enhancements */}
      <ProgressIndicator />
      <StickyNavigation />
      <SocialProof />

      {/* Main Content */}
      <Hero />
      <TrustSignals />
      <WhatIsPFN />
      <Stats />
      <AboutBook />
      <PodcastSpotlight />
      <JoinCommunity />
      <AboutEmmanuel />
      <ProcessBenefits />
      <ToolsResources />
      <ProcessAssessment />
      <BookingForm />
      <FAQ />
      <FeedbackForm />
      <Newsletter />
      <FinalCTA />
      <Footer />
      {/* Debug Components - Remove after testing */}
      <AirtableDebugger />
      <FormDebugger />
    </main>
  )
}
