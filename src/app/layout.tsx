import './globals.css'
import type { Metadata } from 'next'
import { Inter , Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] , variable: "--font-inter" })
const poppins = Poppins({ subsets: ['latin'] , variable: "--font-poppins" , weight: ['400','500','600','700']  })


export const metadata: Metadata = {
  title: 'BlueCheese Sports',
  description: 'Travel with a group of 50 fans to Cote D\'Ivoire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} bg-[#19181f]`}>{children}</body>
    </html>
  )
}
