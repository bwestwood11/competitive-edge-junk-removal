'use client'

import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './globals.css'
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { StripeProvider } from './context/StripeContext'

export const metadata = {
  title: 'Competitive Edge Junk Removal',
  description: 'Tampa Bays Best Junk Removal & Dumpster Rental Company.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StripeProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en'>
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
        </body>
        </LocalizationProvider>
        </StripeProvider>
    </html>
  )
}
