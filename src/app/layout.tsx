import NavBar from '@/components/layout/NavBar/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/context/themeContext'

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
        className={inter.className}
        style={{
          backgroundColor: 'black',
        }}
      >
        <ThemeProvider>
          <MuiTheme>
            <NavBar />
            {children}
          </MuiTheme>
        </ThemeProvider>
      </body>
    </html>
  )
}
