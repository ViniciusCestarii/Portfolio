import NavBar from '@/components/layout/NavBar/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter' // improves mui for nextjs
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'
import MuiTheme from '@/components/layout/MuiTheme'
import ThemeProvider from '@/context/themeContext'
import Footer from '@/components/page/Footer'
import getThemeColor from '@/utils/theme/getThemeFromCookie'
import { env } from '@/env'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://viniciuscestarii-portfolio.vercel.app/'),
  title: 'Vinicius Cestarii',
  description: 'Vinicius Cestarii - Full Stack Developer',
  keywords: ['Vinicius Cestarii', 'Full Stack Developer'],
  icons: '/public-icon.svg',
  twitter: {
    creator: 'vinicius-cestari',
    creatorId: 'vinicius-cestari',
    images: '/cover.png',
    title: 'Vinicius Cestarii',
    description: 'Vinicius Cestarii - Full Stack Developer',
  },
  openGraph: {
    url: 'https://viniciuscestarii-portfolio.vercel.app/',
    images: '/cover.png',
    title: 'Vinicius Cestarii',
    description: 'Vinicius Cestarii - Full Stack Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  const CrispChat = dynamic(() => import('@/components/chat/Crisp'), {
    ssr: false,
  })

  const themeColor = getThemeColor()

  return (
    <html lang="en" id="home" className={`${inter.variable}`}>
      <body
        style={{
          backgroundColor: 'var(--background-color)',
          overflow: 'hidden',
        }}
      >
        <Analytics />
        <SpeedInsights />
        <CrispChat CRISP_WEBSITE_ID={env.CRISP_WEBSITE_ID} />
        <AppRouterCacheProvider>
          <ThemeProvider themeColor={themeColor}>
            <MuiTheme>
              <NavBar />
              {children}
              <Footer />
            </MuiTheme>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
