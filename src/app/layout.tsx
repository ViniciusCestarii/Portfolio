import NavBar from '@/components/layout/NavBar/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import dynamic from 'next/dynamic'

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
  const MuiTheme = dynamic(() => import('@/components/layout/MuiTheme'), {
    ssr: false,
  })

  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: 'black' }}>
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
