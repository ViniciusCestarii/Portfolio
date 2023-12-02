'use client'
import { useMyTheme } from '@/context/themeContext'
import { ThemeProvider } from '@emotion/react'
import createTheme from '@mui/material/styles/createTheme'
import { ReactNode } from 'react'

interface MuiThemeProps {
  children: ReactNode
}

const MuiTheme = ({ children }: MuiThemeProps) => {
  const { themeColor } = useMyTheme()

  const theme = createTheme({
    palette: {
      mode: 'dark',
      contrastThreshold: 4.5,
      primary: {
        main: themeColor.hex,
        contrastText: '#fff',
      },
    },
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiTheme
