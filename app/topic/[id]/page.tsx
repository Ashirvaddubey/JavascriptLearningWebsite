"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BookOpen, Code, ArrowLeft, ArrowRight, CheckCircle, XCircle, Play } from "lucide-react"
import Link from "next/link"
import AuthGuard from "@/components/auth-guard"
import { topics } from "@/lib/content"
import ReactMarkdown from "react-markdown"

function PracticeSection({ topic }: { topic: any }) {
  const [code, setCode] = useState(topic.codeExample)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [copied, setCopied] = useState(false)

  const runCode = () => {
    setIsRunning(true)
    setOutput("")

    setTimeout(() => {
      try {
        const logs: string[] = []
        const mockConsole = {
          log: (...args: any[]) => {
            logs.push(
              args.map((arg) => (typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg))).join(" "),
            )
          },
        }

        const executeCode = new Function("console", code)
        executeCode(mockConsole)

        setOutput(logs.join("\n") || "Code executed successfully (no output)")
      } catch (error) {
        setOutput(`Error: ${error instanceof Error ? error.message : "Unknown error"}`)
      }
      setIsRunning(false)
    }, 500)
  }

  const resetCode = () => {
    setCode(topic.codeExample)
    setOutput("")
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy code:", error)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span>Code Editor</span>
          </CardTitle>
          <CardDescription>Edit and experiment with the code examples</CardDescription>
        </CardHeader>
        <CardContent>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
            placeholder="Write your JavaScript code here..."
          />
          <div className="mt-4 flex gap-2">
            <Button onClick={runCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700">
              <Play className="mr-2 h-4 w-4" />
              {isRunning ? "Running..." : "Run Code"}
            </Button>
            <Button onClick={resetCode} variant="outline">
              Reset
            </Button>
            <Button onClick={copyCode} variant="outline">
              {copied ? <CheckCircle className="mr-2 h-4 w-4" /> : <Code className="mr-2 h-4 w-4" />}
              {copied ? "Copied!" : "Copy Code"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Output</CardTitle>
          <CardDescription>Code execution results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-900 text-white p-4 rounded-lg h-64 overflow-auto font-mono text-sm">
            {output ? (
              <pre className="whitespace-pre-wrap">{output}</pre>
            ) : (
              <div className="text-gray-400 italic">Click "Run Code" to see output here...</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TopicContent() {
  const params = useParams()
  const router = useRouter()
  const topicId = Number.parseInt(params.id as string)
  const topic = topics.find((t) => t.id === topicId)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  useEffect(() => {
    if (!topic) {
      router.push("/dashboard")
      return
    }

    // Check for tab parameter in URL
    const urlParams = new URLSearchParams(window.location.search)
    const tab = urlParams.get("tab")
    if (tab === "quiz") {
      // You can add state to switch to quiz tab if needed
    }
  }, [topic, router])

  if (!topic) {
    return <div>Loading...</div>
  }

  const currentQuestion = topic.questions[currentQuestionIndex]
  const totalQuestions = topic.questions.length
  const answeredQuestions = Object.keys(selectedAnswers).length
  const progressPercentage = (answeredQuestions / totalQuestions) * 100

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const handleSubmitQuiz = () => {
    setShowResults(true)
    setQuizCompleted(true)

    // Mark topic as completed
    const completedTopics = JSON.parse(localStorage.getItem("completedTopics") || "[]")
    if (!completedTopics.includes(topicId)) {
      completedTopics.push(topicId)
      localStorage.setItem("completedTopics", JSON.stringify(completedTopics))
    }
  }

  const getScore = () => {
    let correct = 0
    topic.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const score = getScore()
  const scorePercentage = (score / totalQuestions) * 100

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
                <Code className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">{topic.title}</span>
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="notes" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="notes">📚 Notes</TabsTrigger>
            <TabsTrigger value="practice">💻 Practice</TabsTrigger>
            <TabsTrigger value="quiz">🧠 Quiz</TabsTrigger>
          </TabsList>

          {/* Notes Tab */}
          <TabsContent value="notes" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6" />
                  <span>{topic.title} - Study Notes</span>
                </CardTitle>
                <CardDescription>
                  Duration: {topic.duration} | {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-blue max-w-none">
                <ReactMarkdown>{topic.notes}</ReactMarkdown>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice" className="mt-6">
            <PracticeSection topic={topic} />
          </TabsContent>

          {/* Quiz Tab */}
          <TabsContent value="quiz" className="mt-6">
            <div className="space-y-6">
              {/* Progress */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Quiz Progress</span>
                    <span className="text-sm text-gray-500">
                      {answeredQuestions}/{totalQuestions} answered
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </CardContent>
              </Card>

              {!showResults ? (
                /* Question Card */
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>
                        Question {currentQuestionIndex + 1} of {totalQuestions}
                      </CardTitle>
                      <Badge variant="outline">
                        {selectedAnswers[currentQuestion.id] !== undefined ? "Answered" : "Not Answered"}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg font-medium text-gray-900">
                      {currentQuestion.question}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={selectedAnswers[currentQuestion.id]?.toString() || ""}
                      onValueChange={(value) => handleAnswerSelect(currentQuestion.id, Number.parseInt(value))}
                    >
                      {currentQuestion.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                          <Label htmlFor={`option-${index}`} className="cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    <div className="flex justify-between mt-6">
                      <Button variant="outline" onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>

                      {currentQuestionIndex === totalQuestions - 1 ? (
                        <Button
                          onClick={handleSubmitQuiz}
                          disabled={answeredQuestions < totalQuestions}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Submit Quiz
                        </Button>
                      ) : (
                        <Button
                          onClick={handleNextQuestion}
                          disabled={selectedAnswers[currentQuestion.id] === undefined}
                        >
                          Next
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                /* Results */
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        {scorePercentage >= 70 ? (
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-600" />
                        )}
                        <span>Quiz Results</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold mb-2">
                          {score}/{totalQuestions}
                        </div>
                        <div className="text-lg text-gray-600">{Math.round(scorePercentage)}% Score</div>
                        <div className="mt-4">
                          {scorePercentage >= 70 ? (
                            <Alert className="border-green-200 bg-green-50">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <AlertDescription className="text-green-800">
                                Congratulations! You've mastered this topic. 🎉
                              </AlertDescription>
                            </Alert>
                          ) : (
                            <Alert className="border-yellow-200 bg-yellow-50">
                              <AlertDescription className="text-yellow-800">
                                Good effort! Review the notes and try again to improve your score.
                              </AlertDescription>
                            </Alert>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Detailed Results */}
                  {topic.questions.map((question, index) => {
                    const userAnswer = selectedAnswers[question.id]
                    const isCorrect = userAnswer === question.correctAnswer

                    return (
                      <Card key={question.id} className={isCorrect ? "border-green-200" : "border-red-200"}>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2 text-lg">
                            {isCorrect ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-600" />
                            )}
                            <span>Question {index + 1}</span>
                          </CardTitle>
                          <CardDescription className="text-base font-medium text-gray-900">
                            {question.question}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">Your answer:</span>
                              <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                                {question.options[userAnswer]}
                              </span>
                            </div>
                            {!isCorrect && (
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">Correct answer:</span>
                                <span className="text-green-600">{question.options[question.correctAnswer]}</span>
                              </div>
                            )}
                            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                              <span className="font-medium text-blue-900">Explanation:</span>
                              <p className="text-blue-800 mt-1">{question.explanation}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}

                  <div className="flex justify-center space-x-4">
                    <Button
                      onClick={() => {
                        setShowResults(false)
                        setSelectedAnswers({})
                        setCurrentQuestionIndex(0)
                      }}
                      variant="outline"
                    >
                      Retake Quiz
                    </Button>
                    <Link href="/dashboard">
                      <Button className="bg-blue-600 hover:bg-blue-700">Back to Dashboard</Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default function TopicPage() {
  return (
    <AuthGuard>
      <TopicContent />
    </AuthGuard>
  )
}
