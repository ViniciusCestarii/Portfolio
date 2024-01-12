import NavBar from '@/components/layout/NavBar/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/context/themeContext'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter' // improves mui for nextjs

const inter = Inter({ subsets: ['latin'] })

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
      <body
        className={`${inter.className}`}
        style={{ backgroundColor: 'rgb(14, 14, 20)' }}
      >
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
