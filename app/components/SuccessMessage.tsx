import { CheckCircle } from "lucide-react"

interface SuccessMessageProps {
  title: string
  message: string
}

export default function SuccessMessage({ title, message }: SuccessMessageProps) {
  return (
    <div className="text-center py-8">
      <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{message}</p>
    </div>
  )
}
