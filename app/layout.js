import Header from './components/Header'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Competitive Edge Junk Removal',
  description: 'Tampa Bays Best Junk Removal & Dumpster Rental Company.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
        </body>
    </html>
  )
}
