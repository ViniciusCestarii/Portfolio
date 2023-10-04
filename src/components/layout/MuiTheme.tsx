'use client'
import { ThemeProvider } from '@emotion/react'
import createTheme from '@mui/material/styles/createTheme'
import { ReactNode } from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4ade80',
      contrastText: '#fff',
    },
  },
})

interface MuiThemeprops {
  children: ReactNode
}

const MuiTheme = ({ children }: MuiThemeprops) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiTheme
