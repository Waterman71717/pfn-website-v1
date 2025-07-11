"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, CheckCircle, AlertCircle, XCircle } from "lucide-react"
import { useState } from "react"

export default function ProcessAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState("")

  const questions = [
    {
      question: "How often do you experience operational bottlenecks?",
      options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
      scores: [1, 2, 3, 4, 5],
    },
    {
      question: "Do you have documented processes for key operations?",
      options: ["None", "Few", "Some", "Most", "All"],
      scores: [1, 2, 3, 4, 5],
    },
    {
      question: "How well can your team handle increased workload?",
      options: ["Poorly", "With difficulty", "Adequately", "Well", "Excellently"],
      scores: [1, 2, 3, 4, 5],
    },
    {
      question: "How often do you measure operational metrics?",
      options: ["Never", "Rarely", "Monthly", "Weekly", "Daily"],
      scores: [1, 2, 3, 4, 5],
    },
    {
      question: "How quickly can you identify and fix operational issues?",
      options: ["Very slowly", "Slowly", "Moderately", "Quickly", "Very quickly"],
      scores: [1, 2, 3, 4, 5],
    },
  ]

  const handleAnswer = (scoreIndex: number) => {
    const newAnswers = [...answers, questions[currentQuestion].scores[scoreIndex]]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    const total = answers.reduce((sum, score) => sum + score, 0)
    const percentage = (total / (questions.length * 5)) * 100
    return Math.round(percentage)
  }

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { level: "Advanced", icon: CheckCircle, color: "text-green-400" }
    if (score >= 60) return { level: "Intermediate", icon: AlertCircle, color: "text-yellow-400" }
    return { level: "Beginner", icon: XCircle, color: "text-red-400" }
  }

  const handleSaveResults = async () => {
    const score = calculateScore()
    const level = getScoreLevel(score).level

    try {
      await fetch("/api/assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          score,
          level,
          answers,
        }),
      })
    } catch (error) {
      console.error("Error saving assessment:", error)
    }
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-gold" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Process Maturity Assessment</h2>
            <p className="text-xl text-gray-300">
              Discover your startup's current process maturity level and get personalized recommendations.
            </p>
          </div>

          <Card className="bg-navy border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">
                {showResults ? "Your Results" : `Question ${currentQuestion + 1} of ${questions.length}`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!showResults ? (
                <div className="space-y-6">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gold h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-6">{questions[currentQuestion].question}</h3>

                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full text-left justify-start bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:border-gold"
                        onClick={() => handleAnswer(index)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="text-6xl font-bold text-gold">{calculateScore()}%</div>

                  {(() => {
                    const { level, icon: Icon, color } = getScoreLevel(calculateScore())
                    return (
                      <div className="flex items-center justify-center space-x-2">
                        <Icon className={`w-6 h-6 ${color}`} />
                        <span className={`text-xl font-semibold ${color}`}>{level}</span>
                      </div>
                    )
                  })()}

                  <div className="bg-gray-800 p-4 rounded-lg text-left">
                    <h4 className="font-semibold mb-2 text-gold">Recommendations:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {calculateScore() < 60 && (
                        <>
                          <li>• Start with basic process documentation</li>
                          <li>• Implement daily huddles for team alignment</li>
                          <li>• Focus on identifying your biggest bottlenecks</li>
                        </>
                      )}
                      {calculateScore() >= 60 && calculateScore() < 80 && (
                        <>
                          <li>• Implement metrics tracking for key processes</li>
                          <li>• Create standard operating procedures</li>
                          <li>• Begin process optimization initiatives</li>
                        </>
                      )}
                      {calculateScore() >= 80 && (
                        <>
                          <li>• Focus on advanced automation opportunities</li>
                          <li>• Implement continuous improvement programs</li>
                          <li>• Consider mentoring other startups</li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter email to save results"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
                    />
                    <Button
                      onClick={handleSaveResults}
                      className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold"
                    >
                      Get Detailed Report
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
