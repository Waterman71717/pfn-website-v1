"use client"

import type React from "react"

import { useState } from "react"
import ErrorBoundary from "./ErrorBoundary"
import LoadingSpinner from "./LoadingSpinner"

interface FormWrapperProps {
  children: React.ReactNode
  onSubmit: (data: any) => Promise<void>
  className?: string
}

export default function FormWrapper({ children, onSubmit, className = "" }: FormWrapperProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true)
    setError(null)

    try {
      await onSubmit(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ErrorBoundary>
      <div className={className}>
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}
        {isSubmitting && (
          <div className="absolute inset-0 bg-navy/50 flex items-center justify-center rounded-lg">
            <LoadingSpinner />
          </div>
        )}
        {children}
      </div>
    </ErrorBoundary>
  )
}
