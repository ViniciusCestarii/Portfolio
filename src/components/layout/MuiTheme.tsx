'use client'
import { useMyTheme } from '@/context/themeContext'
import { ThemeProvider } from '@emotion/react'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { ReactNode } from 'react'

interface MuiThemeProps {
  children: ReactNode
}

const MuiTheme = ({ children }: MuiThemeProps) => {
  const { themeColor } = useMyTheme()

  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode: 'dark',
        contrastThreshold: 4.5,
        primary: {
          main: themeColor.hex,
          contrastText: '#DDDDFF',
        },
        text: {
          primary: '#DDDDFF',
          secondary: '#C4C4CC',
        },
      },
      typography: {
        h1: {
          letterSpacing: '-4px',
          fontWeight: 400,
        },
        h2: {
          letterSpacing: '-1px',
        },
        fontFamily: [
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    }),
  )

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiTheme
