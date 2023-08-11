import { Toaster } from "react-hot-toast"

const ToastProvider = () => {
  return (
    <Toaster position="top-center" toastOptions={{
        duration: 4000,
        style: {
            background: '#363636',
            color: '#fff',
        }
    }} />
  )
}

export default ToastProvider;