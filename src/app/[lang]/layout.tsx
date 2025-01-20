import NavBar from '@/components/layout/NavBar/NavBar'
import Footer from '@/components/page/Footer'
import ThemeProvider from '@/context/ThemeContext'
import { DictionaryKeyType, getDictionary } from '@/dictionaries/getDictionary'
import { env } from '@/env'
import getThemeColor from '@/utils/theme/getThemeFromCookie'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter' // improves mui for nextjs
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import dynamicImport from 'next/dynamic'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://viniciuscestarii-portfolio.vercel.app/'),
  title: 'Vinicius Cestari',
  description: 'Vinicius Cestari - Full Stack Developer',
  keywords: ['Vinicius Cestari', 'Full Stack Developer'],
  icons: '/public-icon.png',
  twitter: {
    creator: 'vinicius-cestari',
    creatorId: 'vinicius-cestari',
    images: '/cover.png',
    title: 'Vinicius Cestari',
    description: 'Vinicius Cestari - Full Stack Developer',
  },
  openGraph: {
    url: 'https://viniciuscestarii-portfolio.vercel.app/',
    images: '/cover.png',
    title: 'Vinicius Cestarii',
    description: 'Vinicius Cestarii - Full Stack Developer',
    type: 'website',
  },
  other: {
    'google-site-verification': 'DKpd_K2e8-uwjV-xYsHwlWLPtL2GUT-6evJL9DCuY6k',
  },
}

interface RootLayoutProps {
  params: {
    lang: DictionaryKeyType
  }
  children: React.ReactNode
}

export default async function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  const CrispChat = dynamicImport(() => import('@/components/chat/Crisp'), {
    ssr: false,
  })

  const dict = await getDictionary(lang)

  const themeColor = getThemeColor()

  return (
    <html lang={lang} id="home" className={`${inter.variable}`}>
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
          <ThemeProvider theme={themeColor}>
            <NavBar dict={dict} />
            {children}
            <Footer dict={dict} />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
