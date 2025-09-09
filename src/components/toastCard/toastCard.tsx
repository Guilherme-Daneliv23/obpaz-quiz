// src/components/toast/Toast.tsx
import './toastCard.css'

interface ToastProps {
  message: string
  type: 'success' | 'error'
}

export const Toast = ({ message, type }: ToastProps) => {
  return (
    <div className={`toast ${type}`}>
      {message}
    </div>
  )
}
