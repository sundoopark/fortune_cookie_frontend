interface FortuneDisplayProps {
  wisdom: string
}

export function FortuneDisplay({ wisdom }: FortuneDisplayProps) {
  if (!wisdom) return null

  return (
    <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-md">
      <h3 className="text-sm font-medium text-orange-800 mb-1">Your Fortune Cookie Says:</h3>
      <p className="text-gray-700 italic">"{wisdom}"</p>
    </div>
  )
}