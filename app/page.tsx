import { FortuneContainer } from "@/components/fortune-container"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-amber-50 to-orange-100">
      <FortuneContainer />
    </main>
  )
}