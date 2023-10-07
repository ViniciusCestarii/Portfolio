import NavBar from '@/components/layout/NavBar/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MuiTheme from '@/components/layout/MuiTheme'
import { ThemeProvider } from '@/context/themeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinicius Cestarii',
  description: 'Vinicius Cestarii - Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
