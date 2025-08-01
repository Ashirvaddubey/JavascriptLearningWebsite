"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowLeft, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"
import AuthGuard from "@/components/auth-guard"
import { topics } from "@/lib/content"

function DownloadContent() {
  const params = useParams()
  const router = useRouter()
  const topicId = Number.parseInt(params.id as string)
  const topic = topics.find((t) => t.id === topicId)

  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadComplete, setDownloadComplete] = useState(false)

  useEffect(() => {
    if (!topic) {
      router.push("/dashboard")
    }
  }, [topic, router])

  if (!topic) {
    return <div>Loading...</div>
  }

  const generatePDF = () => {
    setIsDownloading(true)

    // Simulate PDF generation
    setTimeout(() => {
      // Create a blob with the content
      const content = `
# ${topic.title}

## Description
${topic.description}

## Difficulty Level
${topic.difficulty}

## Estimated Duration
${topic.duration}

## Study Notes
${topic.notes}

## Code Example
\`\`\`javascript
${topic.codeExample}
\`\`\`

## Quiz Questions
${topic.questions
  .map(
    (q, index) => `
${index + 1}. ${q.question}
   Options:
   ${q.options.map((opt, i) => `   ${String.fromCharCode(97 + i)}) ${opt}`).join("\n   ")}
   
   Correct Answer: ${String.fromCharCode(97 + q.correctAnswer)}) ${q.options[q.correctAnswer]}
   Explanation: ${q.explanation}
`,
  )
  .join("\n")}

---
Generated from Learn JavaScript Platform
© 2024 Learn JavaScript. All rights reserved.
      `

      const blob = new Blob([content], { type: "text/plain" })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${topic.title.replace(/\s+/g, "_")}_Notes.txt`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)

      setIsDownloading(false)
      setDownloadComplete(true)

      setTimeout(() => setDownloadComplete(false), 3000)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-red-600" />
                <span className="text-lg font-semibold text-gray-900">Download Notes - {topic.title}</span>
              </div>
            </div>
            <Badge
              className={`${
                topic.difficulty === "Beginner"
                  ? "bg-green-100 text-green-800"
                  : topic.difficulty === "Intermediate"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }`}
            >
              {topic.difficulty}
            </Badge>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto p-4 bg-red-100 rounded-full w-fit mb-4">
              <FileText className="h-12 w-12 text-red-600" />
            </div>
            <CardTitle className="text-2xl">{topic.title} - Study Notes</CardTitle>
            <CardDescription className="text-lg">Download comprehensive notes for offline learning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Topic Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Difficulty</div>
                  <Badge
                    className={`mt-1 ${
                      topic.difficulty === "Beginner"
                        ? "bg-green-100 text-green-800"
                        : topic.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {topic.difficulty}
                  </Badge>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Duration</div>
                  <div className="text-gray-600 mt-1">{topic.duration}</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Questions</div>
                  <div className="text-gray-600 mt-1">{topic.questions.length} quiz questions</div>
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-lg font-semibold mb-3">What's included in the download:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Complete study notes and explanations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Code examples with explanations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Quiz questions with correct answers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Detailed explanations for each answer</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Offline-friendly text format</span>
                  </li>
                </ul>
              </div>

              {/* Download Button */}
              <div className="text-center">
                <Button
                  onClick={generatePDF}
                  disabled={isDownloading}
                  size="lg"
                  className="bg-red-600 hover:bg-red-700"
                >
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating Notes...
                    </>
                  ) : downloadComplete ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Downloaded Successfully!
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-5 w-5" />
                      Download Study Notes
                    </>
                  )}
                </Button>
              </div>

              {/* Additional Actions */}
              <div className="flex justify-center space-x-4 pt-4 border-t">
                <Link href={`/topic/${topic.id}`}>
                  <Button variant="outline">📚 View Online Notes</Button>
                </Link>
                <Link href={`/practice/${topic.id}`}>
                  <Button variant="outline">💻 Practice Code</Button>
                </Link>
                <Link href={`/topic/${topic.id}?tab=quiz`}>
                  <Button variant="outline">🧠 Take Quiz</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function DownloadPage() {
  return (
    <AuthGuard>
      <DownloadContent />
    </AuthGuard>
  )
}
