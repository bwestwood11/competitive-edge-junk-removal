import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './globals.css'
import { StripeProvider } from './context/StripeContext'
import Providers from './context/LocalizationProvider'
import ToastProvider from './context/ToastProvider'
import GoogleAnalytics from './components/GoogleAnalytics'


export const metadata = {
  title: 'Competitive Edge Junk Removal',
  description: 'Tampa Bays Best Junk Removal & Dumpster Rental Company.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <StripeProvider>
        <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
     <Providers>
      <body>
        <ToastProvider />
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
