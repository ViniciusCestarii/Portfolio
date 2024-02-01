import NavBar from '@/components/layout/NavBar/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/context/themeContext'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter' // improves mui for nextjs
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Vinicius Cestarii',
  description: 'Vinicius Cestarii - Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  const MuiTheme = dynamic(() => import('@/components/layout/MuiTheme'), {
    ssr: false,
  })

  return (
    <html lang="en" id="home">
      <body style={{ backgroundColor: 'rgb(14, 14, 20)' }}>
        <Analytics />
        <AppRouterCacheProvider>
          <ThemeProvider>
            <MuiTheme>
              <NavBar />
              {children}
            </MuiTheme>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
