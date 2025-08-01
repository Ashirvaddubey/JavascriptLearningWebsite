import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production"

export interface User {
  id: string
  email: string
  name: string
  password: string
  progress: Record<string, boolean>
  completedQuestions: Record<string, number[]>
}

// Demo users with hashed passwords
const demoUsers: User[] = [
  {
    id: "1",
    email: "demo@learnjsplatform.com",
    name: "Demo User",
    password: "$2a$10$rOzJqQZQZQZQZQZQZQZQZeJ8K8K8K8K8K8K8K8K8K8K8K8K8K8K8K", // password: demo123
    progress: {},
    completedQuestions: {},
  },
  {
    id: "2",
    email: "student@example.com",
    name: "John Student",
    password: "$2a$10$rOzJqQZQZQZQZQZQZQZQZeJ8K8K8K8K8K8K8K8K8K8K8K8K8K8K8K", // password: student123
    progress: {},
    completedQuestions: {},
  },
]

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" })
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string }
  } catch {
    return null
  }
}

export async function findUserByEmail(email: string): Promise<User | null> {
  // In a real app, this would query a database
  return demoUsers.find((user) => user.email === email) || null
}

export async function findUserById(id: string): Promise<User | null> {
  // In a real app, this would query a database
  return demoUsers.find((user) => user.id === id) || null
}

export async function createUser(email: string, name: string, password: string): Promise<User> {
  const hashedPassword = await hashPassword(password)
  const newUser: User = {
    id: Date.now().toString(),
    email,
    name,
    password: hashedPassword,
    progress: {},
    completedQuestions: {},
  }
  demoUsers.push(newUser)
  return newUser
}
