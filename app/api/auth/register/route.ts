import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters long" }, { status: 400 })
    }

    // For demo purposes, simulate user creation
    const newUser = {
      id: Date.now().toString(),
      email,
      name,
      progress: {},
      completedQuestions: {},
    }

    // Generate a demo token
    const token = "user-token-" + Date.now()

    return NextResponse.json({
      token,
      user: newUser,
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
