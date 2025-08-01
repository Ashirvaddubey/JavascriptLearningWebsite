"use client"
import { BookOpen, Code, Zap, Globe, Database, Cpu, Settings } from "lucide-react"
import { useEffect } from "react"

import { useRouter } from "next/navigation"

const tutorialTopics = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript programming language and its role in web development.",
    icon: <BookOpen className="h-6 w-6" />,
    difficulty: "Beginner",
    duration: "30 min",
  },
  {
    id: 2,
    title: "Variables and Data Types",
    description: "Understand how to declare variables and work with different data types in JavaScript.",
    icon: <Database className="h-6 w-6" />,
    difficulty: "Beginner",
    duration: "45 min",
  },
  {
    id: 3,
    title: "Functions",
    description: "Master function declarations, expressions, arrow functions, and scope concepts.",
    icon: <Code className="h-6 w-6" />,
    difficulty: "Beginner",
    duration: "60 min",
  },
  {
    id: 4,
    title: "Objects and Arrays",
    description: "Learn to work with complex data structures and their methods.",
    icon: <Settings className="h-6 w-6" />,
    difficulty: "Intermediate",
    duration: "75 min",
  },
  {
    id: 5,
    title: "DOM Manipulation",
    description: "Discover how to interact with HTML elements and modify web pages dynamically.",
    icon: <Globe className="h-6 w-6" />,
    difficulty: "Intermediate",
    duration: "90 min",
  },
  {
    id: 6,
    title: "Event Handling",
    description: "Learn to respond to user interactions and browser events effectively.",
    icon: <Zap className="h-6 w-6" />,
    difficulty: "Intermediate",
    duration: "60 min",
  },
  {
    id: 7,
    title: "Async/Await & Promises",
    description: "Master asynchronous programming with modern JavaScript techniques.",
    icon: <Cpu className="h-6 w-6" />,
    difficulty: "Advanced",
    duration: "120 min",
  },
  {
    id: 8,
    title: "ES6+ Features",
    description: "Explore modern JavaScript features like destructuring, modules, and more.",
    icon: <Zap className="h-6 w-6" />,
    difficulty: "Intermediate",
    duration: "90 min",
  },
  {
    id: 9,
    title: "Error Handling",
    description: "Learn to handle errors gracefully and debug your JavaScript code.",
    icon: <Settings className="h-6 w-6" />,
    difficulty: "Intermediate",
    duration: "45 min",
  },
  {
    id: 10,
    title: "APIs and Fetch",
    description: "Connect to external services and handle HTTP requests in JavaScript.",
    icon: <Globe className="h-6 w-6" />,
    difficulty: "Advanced",
    duration: "105 min",
  },
]

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

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Always redirect to login page first
    router.replace("/auth/login")
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to login...</p>
      </div>
    </div>
  )
}
