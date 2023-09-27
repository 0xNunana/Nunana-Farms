import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nunana Farms | Consultancy',
  description: 'Farm Consultancy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' bg-yellow-300/40  ' >
      
        <Header/>
      
      
        {children}
        <Footer/>
        </body>
    </html>
  )
}
