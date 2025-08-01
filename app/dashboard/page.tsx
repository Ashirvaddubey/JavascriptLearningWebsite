"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Code,
  Download,
  Play,
  FileText,
  Zap,
  Globe,
  Database,
  Cpu,
  Settings,
  LogOut,
  User,
  Trophy,
  Crown,
  Medal,
  Award,
} from "lucide-react"
import Link from "next/link"
import AuthGuard from "@/components/auth-guard"
import { topics } from "@/lib/content"

const iconMap = {
  BookOpen,
  Database,
  Code,
  Settings,
  Globe,
  Zap,
  Cpu,
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800"
    case "Advanced":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

// Mock leaderboard data
const leaderboardData = [
  { id: 1, name: "आर्या शर्मा", score: 950, completedTopics: 10, avatar: "आश" },
  { id: 2, name: "राहुल गुप्ता", score: 890, completedTopics: 9, avatar: "रग" },
  { id: 3, name: "प्रिया सिंह", score: 850, completedTopics: 8, avatar: "प्रस" },
  { id: 4, name: "अमित कुमार", score: 820, completedTopics: 8, avatar: "अक" },
  { id: 5, name: "सुनीता देवी", score: 780, completedTopics: 7, avatar: "सद" },
  { id: 6, name: "विकास यादव", score: 750, completedTopics: 7, avatar: "वय" },
  { id: 7, name: "अंकिता जैन", score: 720, completedTopics: 6, avatar: "अज" },
  { id: 8, name: "रोहित वर्मा", score: 690, completedTopics: 6, avatar: "रव" },
]

function QuickPracticeCard({ topic }: { topic: any }) {
  const [code, setCode] = useState(topic.codeExample)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)

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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>{topic.title} Practice</CardTitle>
          <CardDescription>Edit and run the code to see how it works</CardDescription>
        </CardHeader>
        <CardContent>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-48 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
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
            <Link href={`/topic/${topic.id}`}>
              <Button variant="outline">Learn More</Button>
            </Link>
            <Link href={`/practice/${topic.id}`}>
              <Button variant="outline">Full Practice</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Output</CardTitle>
          <CardDescription>Code execution results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-900 text-white p-4 rounded-lg h-48 overflow-auto font-mono text-sm">
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

function DashboardContent() {
  const [user, setUser] = useState<any>(null)
  const [completedTopics, setCompletedTopics] = useState<number[]>([])
  const [userScore, setUserScore] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)
    }

    // Load progress from localStorage
    const progress = localStorage.getItem("completedTopics")
    if (progress) {
      const completed = JSON.parse(progress)
      setCompletedTopics(completed)
      // Calculate user score based on completed topics
      setUserScore(completed.length * 95) // 95 points per completed topic
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("completedTopics")
    router.push("/auth/login")
  }

  const progressPercentage = (completedTopics.length / topics.length) * 100

  // Add current user to leaderboard for display
  const currentUserRank = {
    id: 999,
    name: user?.name || "You",
    score: userScore,
    completedTopics: completedTopics.length,
    avatar:
      user?.name
        ?.split(" ")
        .map((n: string) => n[0])
        .join("") || "YU",
    isCurrentUser: true,
  }

  const fullLeaderboard = [...leaderboardData, currentUserRank]
    .sort((a, b) => b.score - a.score)
    .map((user, index) => ({ ...user, rank: index + 1 }))

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-sm font-bold text-gray-500">#{rank}</span>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Learn JavaScript</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => document.getElementById("tutorials")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Tutorials
              </button>
              <button
                onClick={() => document.getElementById("practice")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Practice
              </button>
              <button
                onClick={() => document.getElementById("downloads")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Download Notes
              </button>
              <button
                onClick={() => document.getElementById("leaderboard")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Leaderboard
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-700">{user?.name}</span>
                <Badge variant="outline" className="text-xs">
                  {userScore} pts
                </Badge>
              </div>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome back, {user?.name}! 👋</h1>
            <p className="text-lg text-gray-600 mb-6">Continue your JavaScript learning journey</p>

            {/* Progress Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span>Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completed Topics</span>
                      <span>
                        {completedTopics.length}/{topics.length}
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                    <p className="text-xs text-gray-500 text-center">{Math.round(progressPercentage)}% Complete</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Award className="h-5 w-5 text-blue-500" />
                    <span>Score</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{userScore}</div>
                    <p className="text-sm text-gray-500">Total Points</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Crown className="h-5 w-5 text-purple-500" />
                    <span>Rank</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">
                      #{fullLeaderboard.find((u) => u.isCurrentUser)?.rank || "N/A"}
                    </div>
                    <p className="text-sm text-gray-500">Global Ranking</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Topics Section */}
      <section id="tutorials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">JavaScript Tutorial Topics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tutorials with questions, solutions, and interactive practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => {
              const IconComponent = iconMap[topic.icon as keyof typeof iconMap] || BookOpen
              const isCompleted = completedTopics.includes(topic.id)

              return (
                <Card
                  key={topic.id}
                  className={`hover:shadow-lg transition-shadow duration-300 ${isCompleted ? "ring-2 ring-green-500" : ""}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getDifficultyColor(topic.difficulty)}>{topic.difficulty}</Badge>
                        {isCompleted && <Badge className="bg-green-100 text-green-800">✓ Complete</Badge>}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">{topic.description}</CardDescription>
                    <div className="text-xs text-gray-500 mt-2">
                      Duration: {topic.duration} | {topic.practiceExercises.length} exercises
                    </div>
                  </CardHeader>
                  <CardFooter className="flex gap-2">
                    <Link href={`/topic/${topic.id}`} className="flex-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Start Learning
                      </Button>
                    </Link>
                    <Link href={`/practice/${topic.id}`} className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        <Code className="mr-2 h-4 w-4" />
                        Practice
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* PDF Downloads Section */}
      <section id="downloads" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Download Study Notes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get comprehensive study guides for offline learning and reference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {topics.map((topic) => (
              <Card key={`pdf-${topic.id}`} className="text-center hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="mx-auto p-3 bg-red-100 rounded-lg w-fit">
                    <FileText className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-sm font-medium">{topic.title}</CardTitle>
                </CardHeader>
                <CardFooter className="pt-2">
                  <Link href={`/download/${topic.id}`} className="w-full">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Download className="mr-2 h-3 w-3" />
                      Download Notes
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Practice Section */}
      <section id="practice" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Practice</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Test your knowledge with interactive coding challenges
            </p>
          </div>

          <Tabs defaultValue="1" className="w-full">
            <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10">
              {topics.map((topic) => (
                <TabsTrigger key={topic.id} value={topic.id.toString()} className="text-xs">
                  {topic.title.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {topics.map((topic) => (
              <TabsContent key={topic.id} value={topic.id.toString()} className="mt-6">
                <QuickPracticeCard topic={topic} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🏆 Leaderboard</h2>
            <p className="text-lg text-gray-600">See how you rank against other JavaScript learners</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Top Performers</CardTitle>
              <CardDescription className="text-center">
                Rankings based on completed topics and quiz scores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fullLeaderboard.slice(0, 10).map((user) => (
                  <div
                    key={user.id}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      user.isCurrentUser
                        ? "bg-blue-50 border-blue-200 ring-2 ring-blue-300"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8">{getRankIcon(user.rank)}</div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {user.avatar}
                        </div>
                        <div>
                          <div className={`font-semibold ${user.isCurrentUser ? "text-blue-900" : "text-gray-900"}`}>
                            {user.name} {user.isCurrentUser && "(You)"}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.completedTopics}/{topics.length} topics completed
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold text-lg ${user.isCurrentUser ? "text-blue-600" : "text-gray-900"}`}>
                        {user.score}
                      </div>
                      <div className="text-sm text-gray-500">points</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Complete more topics and score higher on quizzes to climb the leaderboard! 🚀
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Learn JavaScript</span>
              </div>
              <p className="text-gray-400">Master JavaScript with comprehensive tutorials and hands-on practice.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Learning</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#tutorials" className="hover:text-white transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#practice" className="hover:text-white transition-colors">
                    Practice
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Challenges
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#downloads" className="hover:text-white transition-colors">
                    Study Notes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cheat Sheets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Code Examples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#leaderboard" className="hover:text-white transition-colors">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Learn JavaScript. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Dashboard() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  )
}
