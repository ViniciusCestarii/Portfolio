import NavBar from '@/components/layout/NavBar/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/themeContext'
import ThemeRegistry from '@/components/layout/MuiTheme'

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
  return (
    <html lang="en" id="home">
      <body
        className={`${inter.className}`}
        style={{ backgroundColor: 'rgb(14, 14, 20)' }}
      >
        <ThemeProvider>
          <ThemeRegistry options={{ key: 'mui-theme' }}>
            <NavBar />
            {children}
          </ThemeRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}
