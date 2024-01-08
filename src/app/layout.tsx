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
  title: 'Blue Chesse Sports Travel: Group Trips to Cote D\'Ivoire for Sports Fans',
  description: 'Join Blue Chesse Sports Travel for an unforgettable adventure! Travel with a group of 50 passionate sports fans to Cote D\'Ivoire. Immerse yourself in the excitement of sports events and explore the beauty of this vibrant destination. Book your sports travel experience today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gotham.variable} ${avenirLight.variable}`}>
        {children}
        <script type="text/javascript" src="https://af.uppromote.com/tracking_third_party.js?shop=445cc7-4.myshopify.com"></script>
      </body>
    </html>
  )
}
