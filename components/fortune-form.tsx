"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

interface FortuneFormProps {
  onSubmit: (input: string) => Promise<void>
  isLoading: boolean
}

export function FortuneForm({ onSubmit, isLoading }: FortuneFormProps) {
  const [input, setInput] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    await onSubmit(input)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="What's on your mind?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
        disabled={isLoading}
      />
      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isLoading || !input.trim()}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Seeking wisdom...
          </>
        ) : (
          "Get Wisdom"
        )}
      </Button>
    </form>
  )
}