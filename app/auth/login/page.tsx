"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Code, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // For demo purposes, handle demo credentials directly
    if (email === "demo@learnjsplatform.com" && password === "demo123") {
      const demoUser = {
        id: "1",
        email: "demo@learnjsplatform.com",
        name: "Demo User",
      }
      const token = "demo-token-" + Date.now()
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(demoUser))
      router.push("/dashboard")
      setIsLoading(false)
      return
    }

    if (email === "student@example.com" && password === "student123") {
      const studentUser = {
        id: "2",
        email: "student@example.com",
        name: "John Student",
      }
      const token = "student-token-" + Date.now()
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(studentUser))
      router.push("/dashboard")
      setIsLoading(false)
      return
    }

    // For other credentials, try the API
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        router.push("/dashboard")
      } else {
        setError(data.error || "Invalid credentials")
      }
    } catch (error) {
      setError("Invalid credentials. Please use demo credentials.")
    } finally {
      setIsLoading(false)
    }
  }

  const fillDemoCredentials = (userType: "demo" | "student") => {
    if (userType === "demo") {
      setEmail("demo@learnjsplatform.com")
      setPassword("demo123")
    } else {
      setEmail("student@example.com")
      setPassword("student123")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Learn JavaScript</span>
          </div>
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>Sign in to continue your JavaScript learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6">
            <div className="text-sm text-gray-600 mb-3">Demo Credentials:</div>
            <div className="space-y-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full text-xs bg-transparent"
                onClick={() => fillDemoCredentials("demo")}
              >
                Demo User (demo@learnjsplatform.com / demo123)
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full text-xs bg-transparent"
                onClick={() => fillDemoCredentials("student")}
              >
                Student User (student@example.com / student123)
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/auth/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
