"use client"

import { useState, useEffect } from "react"

export default function ProgressIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.pageYOffset / totalHeight) * 100
      setProgress(currentProgress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div className="h-full bg-gold transition-all duration-150 ease-out" style={{ width: `${progress}%` }} />
    </div>
  )
}
