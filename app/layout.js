import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScoreCard from '@/components/ScoreCard'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JeetbuzzNews',
  description: 'JeetBuzz - Cricket Insights',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ScoreCard/>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
