import './globals.css'
import type { Metadata } from 'next'
import { Inter , Poppins } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] , variable: "--font-inter" })
const poppins = Poppins({ subsets: ['latin'] , variable: "--font-poppins" , weight: ['400','500','600','700']  })

const gotham = localFont({
  src: [
    {
      path: "../../public/fonts/GothamLight.otf",
      weight: '300'
   },
    {
       path: "../../public/fonts/GothamMedium.ttf",
       weight: '500'
    },
    {
      path: "../../public/fonts/GothamBold.ttf",
      weight: '700'
    }
  ],
  variable: '--font-gotham'
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
      <body className={`${gotham.variable} bg-black`}>{children}</body>
    </html>
  )
}
