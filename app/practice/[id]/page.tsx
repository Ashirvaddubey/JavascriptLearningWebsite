"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, ArrowLeft, Play, RotateCcw, Copy, CheckCircle } from "lucide-react"
import Link from "next/link"
import AuthGuard from "@/components/auth-guard"
import { topics } from "@/lib/content"

function PracticeContent() {
  const params = useParams()
  const router = useRouter()
  const topicId = Number.parseInt(params.id as string)
  const topic = topics.find((t) => t.id === topicId)

  const [code, setCode] = useState("")
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!topic) {
      router.push("/dashboard")
      return
    }
    setCode(topic.codeExample)
  }, [topic, router])

  if (!topic) {
    return <div>Loading...</div>
  }

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
          error: (...args: any[]) => {
            logs.push("ERROR: " + args.map((arg) => String(arg)).join(" "))
          },
          warn: (...args: any[]) => {
            logs.push("WARNING: " + args.map((arg) => String(arg)).join(" "))
          },
        }

        // Create a safer execution environment
        const safeGlobals = {
          console: mockConsole,
          Math,
          Date,
          JSON,
          parseInt,
          parseFloat,
          isNaN,
          isFinite,
          String,
          Number,
          Boolean,
          Array,
          Object,
          setTimeout: (fn: Function, delay: number) => {
            // Simulate setTimeout for demo purposes
            logs.push(`setTimeout called with delay: ${delay}ms`)
            fn()
          },
        }

        // Execute the code in a controlled environment
        const executeCode = new Function(...Object.keys(safeGlobals), code)
        executeCode(...Object.values(safeGlobals))

        setOutput(logs.join("\n") || "Code executed successfully (no output)")
      } catch (error) {
        setOutput(`Error: ${error instanceof Error ? error.message : "Unknown error"}`)
      }
      setIsRunning(false)
    }, 800)
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
                <span className="text-lg font-semibold text-gray-900">{topic.title} - Practice</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code Editor */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5" />
                <span>Code Editor</span>
              </CardTitle>
              <CardDescription>Edit and run JavaScript code</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-64 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Write your JavaScript code here..."
                />
                <div className="flex gap-2">
                  <Button onClick={runCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700">
                    <Play className="mr-2 h-4 w-4" />
                    {isRunning ? "Running..." : "Run Code"}
                  </Button>
                  <Button onClick={resetCode} variant="outline">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                  <Button onClick={copyCode} variant="outline">
                    {copied ? <CheckCircle className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Output */}
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

        {/* Instructions */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Practice Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-blue max-w-none">
              <p>
                <strong>Topic:</strong> {topic.title}
              </p>
              <p>
                <strong>Description:</strong> {topic.description}
              </p>
              <p>
                <strong>Duration:</strong> {topic.duration}
              </p>

              <h4>What to try:</h4>
              <ul>
                <li>Modify the existing code to see different outputs</li>
                <li>Add your own examples based on the topic</li>
                <li>Experiment with different values and scenarios</li>
                <li>Try to break the code and fix it to learn error handling</li>
              </ul>

              <div className="mt-4 flex gap-2">
                <Link href={`/topic/${topic.id}`}>
                  <Button variant="outline">📚 View Notes</Button>
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

export default function PracticePage() {
  return (
    <AuthGuard>
      <PracticeContent />
    </AuthGuard>
  )
}
