import './globals.css'
import type { Metadata } from 'next'
import { Inter , Poppins } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] , variable: "--font-inter" })
const poppins = Poppins({ subsets: ['latin'] , variable: "--font-poppins" , weight: ['400','500','600','700']  })

const gotham = localFont({
  src: [
    {
      path: "../../public/fonts/GothamBold.ttf",
    }
  ],
  variable: '--font-gotham'
})

const avenirLight = localFont({
  src: [
    {
      path: "../../public/fonts/AvenirLight.ttf",
    }
  ],
  variable: '--font-avenirLight'
})

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
      <body className={`${gotham.variable} ${avenirLight.variable}`}>{children}</body>
    </html>
  )
}
