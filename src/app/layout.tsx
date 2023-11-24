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
      weight: '700',
      style: 'normal',
    },
    {
      path: "../../public/fonts/GothamBoldItalic.ttf",
      weight: '700',
      style: 'italic',
    },
    {
      path: "../../public/fonts/GothamBook.ttf",
      weight: '400',
      style: 'normal',
    },
    {
      path: "../../public/fonts/GothamBookItalic.ttf",
      weight: '400',
      style: 'italic',
    },
    {
      path: "../../public/fonts/GothamLight.ttf",
      weight: '300',
      style: 'normal',
    },
    {
      path: "../../public/fonts/GothamLightItalic.ttf",
      weight: '300',
      style: 'italic',
    },
    {
      path: "../../public/fonts/GothamMedium.ttf",
      weight: '500',
      style: 'normal',
    },
    {
      path: "../../public/fonts/GothamMediumItalic.ttf",
      weight: '500',
      style: 'italic',
    },
    {
      path: "../../public/fonts/GothamBlack.otf",
      weight: '800',
      style: 'normal',
    },
    {
      path: "../../public/fonts/GothamBold.otf",
      weight: '700',
      style: 'normal',
    },
    {
      path: "../../public/fonts/GothamBookItalic.otf",
      weight: '400',
      style: 'italic',
    },
    {
      path: "../../public/fonts/GothamLight.otf",
      weight: '300',
      style: 'normal',
    },
    {
      path: "../../public/fonts/GothamThin.otf",
      weight: '100',
      style: 'normal',
    },
    {
      path: "../../public/fonts/GothamThinItalic.otf",
      weight: '100',
      style: 'italic',
    },
    {
      path: "../../public/fonts/GothamUltraItalic.otf",
      weight: '900',
      style: 'italic',
    },
    {
      path: "../../public/fonts/GothamXLight.otf",
      weight: '200',
      style: 'normal',
    },
    {
      path: "../../public/fonts/GothamXLightItalic.otf",
      weight: '200',
      style: 'italic',
    }
  ],
  variable: '--font-gotham'
})

const CarneroBold = localFont({
  src: [
    {
      path: "../../public/fonts/CarneroBold.ttf",
    }
  ],
  variable: '--font-carneroBold'
})
const JostVariableFont_wght = localFont({
  src: [
    {
      path: "../../public/fonts/JostVariableFont_wght.ttf",
    },
    {
      path: "../../public/fonts/JostItalicVariableFont_wght.ttf",
    }
  ],
  variable: '--font-avenirLight'
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
  title: 'Blue Chesse Sports Travel',
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
