interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null

  return <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">{message}</div>
}
