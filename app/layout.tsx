import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Denvia | Focused medicines, dependable access',
  description:
    'Denvia develops and commercialises a focused portfolio of medicines for clinical practice, pairing responsible quality with dependable access.',
  generator: 'v0.app',
  icons: { icon: '/images/denvia-logo.jpg' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#073B7A',
  userScalable: true,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
