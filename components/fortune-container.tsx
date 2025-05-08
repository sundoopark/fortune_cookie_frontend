"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie } from "lucide-react"
import { FortuneForm } from "@/components/fortune-form"
import { FortuneDisplay } from "@/components/fortune-display"
import { ErrorMessage } from "@/components/error-message"

export function FortuneContainer() {
  const [wisdom, setWisdom] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const getFortune = async (input: string) => {
    setLoading(true)
    setError("")
    setWisdom("")

    try {
      console.log("Fetching wisdom for input:", input)
      const response = await fetch("/api/fortune", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "input": input }),
      })

      const data = await response.json();
      console.log("Response data:", data)

      if (!response.ok) {
        throw new Error("Failed to get wisdom")
      }

      // Update here to use data.fortune instead of data.wisdom
      if (data.wisdom) {
        setWisdom(data.wisdom)
      } else {
        throw new Error("Unexpected response format")
      }
    } catch (err) {
      setError("Failed to connect to the wisdom server. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 bg-orange-100 p-3 rounded-full">
          <Cookie className="h-8 w-8 text-orange-500" />
        </div>
        <CardTitle className="text-2xl font-bold text-orange-700">Fortune Cookie Wisdom</CardTitle>
        <CardDescription>Enter a topic to receive personalized wisdom</CardDescription>
      </CardHeader>
      <CardContent>
        <FortuneForm onSubmit={getFortune} isLoading={loading} />
        <ErrorMessage message={error} />
        <FortuneDisplay wisdom={wisdom} />
      </CardContent>
      <CardFooter className="text-xs text-center text-gray-500 justify-center">
        Prepared for the Stanford WebCamp Demo
      </CardFooter>
    </Card>
  )
}