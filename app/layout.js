import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './globals.css'
import { StripeProvider } from './context/StripeContext'
import Providers from './context/LocalizationProvider'

export const metadata = {
  title: 'Competitive Edge Junk Removal',
  description: 'Tampa Bays Best Junk Removal & Dumpster Rental Company.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StripeProvider>
     <Providers>
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
        </body>
     </Providers>
        </StripeProvider>
    </html>
  )
}
