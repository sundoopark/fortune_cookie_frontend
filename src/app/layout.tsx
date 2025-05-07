import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fortune Cookie Wisdom",
  description: "Get personalized wisdom based on your input",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="light"
      style={{ colorScheme: "light" }}
    >
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        enableColorScheme={false}  // ← prevents style injection
      >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
