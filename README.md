# 🚀 JavaScript Learning Platform

A comprehensive, interactive learning platform designed to teach JavaScript programming from beginner to advanced levels. Built with Next.js 14, TypeScript, and modern web technologies.

🌐 **Live Demo:** [https://javascript-learning-platform-5o70vcr1i-ashirvaddubeys-projects.vercel.app](https://javascript-learning-platform-5o70vcr1i-ashirvaddubeys-projects.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC)

## ✨ Features

### 🎓 Learning Features
- **10 Comprehensive Topics** covering JavaScript fundamentals to advanced concepts
- **Interactive Code Editor** with real-time execution
- **Practice Exercises** with hands-on coding challenges
- **Quiz System** with detailed explanations
- **Progress Tracking** to monitor learning journey
- **Downloadable Content** for offline learning

### 🎯 Topics Covered
1. **Introduction to JavaScript** - Basics and fundamentals
2. **Variables and Data Types** - Understanding data storage
3. **Functions** - Function declarations, expressions, and scope
4. **Objects and Arrays** - Complex data structures
5. **DOM Manipulation** - Web page interaction
6. **Event Handling** - User interaction management
7. **Async/Await & Promises** - Asynchronous programming
8. **ES6+ Features** - Modern JavaScript features
9. **Error Handling** - Debugging and error management
10. **APIs and Fetch** - External service integration

### 🏆 Gamification
- **Leaderboard System** with user rankings
- **Achievement Badges** for completed topics
- **Progress Visualization** with charts and metrics
- **Score Tracking** for quiz performance

### 🔐 Authentication
- **User Registration** and login system
- **JWT-based Authentication** for secure sessions
- **Demo Accounts** for quick testing
- **Protected Routes** with authentication guards

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend
- **Next.js API Routes** - Server-side API endpoints
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **React Markdown** - Markdown rendering

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **pnpm** - Fast package manager

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd javascript-learning-platform
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   JWT_SECRET=your-secret-key-here
   NODE_ENV=development
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Demo Accounts
For quick testing, you can use these demo accounts:
- **Email:** `demo@learnjsplatform.com` / **Password:** `demo123`
- **Email:** `student@example.com` / **Password:** `student123`

## 📁 Project Structure

```
javascript-learning-platform/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── auth/          # Authentication endpoints
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── practice/          # Practice exercises
│   ├── topic/             # Topic content pages
│   └── download/          # Download functionality
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn/ui components
│   └── auth-guard.tsx    # Authentication wrapper
├── lib/                  # Utility functions and data
│   ├── auth.ts           # Authentication logic
│   ├── content.ts        # Learning content
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Global styles
```

## 🎮 Usage

### For Learners
1. **Register/Login** - Create an account or use demo credentials
2. **Browse Topics** - Explore the 10 comprehensive JavaScript topics
3. **Read Content** - Study detailed notes and explanations
4. **Practice Coding** - Use the interactive code editor
5. **Take Quizzes** - Test your knowledge with interactive questions
6. **Track Progress** - Monitor your learning journey on the dashboard
7. **Download Content** - Save topics for offline learning

### For Educators
- **Content Management** - All learning content is in `lib/content.ts`
- **Customization** - Easy to modify topics, questions, and exercises
- **Extensibility** - Add new topics and features as needed

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Package Management
pnpm install      # Install dependencies
pnpm add <pkg>    # Add new dependency
pnpm remove <pkg> # Remove dependency
```

## 🌟 Key Features in Detail

### Interactive Code Editor
- Real-time JavaScript execution
- Console output display
- Error handling and debugging
- Code reset functionality

### Progress Tracking
- Topic completion status
- Quiz scores and performance
- Learning streak tracking
- Achievement badges

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions
- Accessible UI components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For the deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Radix UI** - For accessible component primitives
- **Shadcn/ui** - For the beautiful component library

## 📞 Support

If you have any questions or need help:
- Create an issue in the repository
- Check the documentation in the code comments
- Review the TypeScript interfaces for type definitions

---

**Happy Learning! 🎉**

Built with ❤️ using Next.js, TypeScript, and modern web technologies. 