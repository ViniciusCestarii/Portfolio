'use client'
import { useTheme } from '@/context/themeContext'
import { ThemeProvider } from '@emotion/react'
import createTheme from '@mui/material/styles/createTheme'
import { ReactNode, useCallback } from 'react'

interface MuiThemeprops {
  children: ReactNode
}

const MuiTheme = ({ children }: MuiThemeprops) => {
  const { themeColor } = useTheme()

  const theme = useCallback(
    () =>
      createTheme({
        palette: {
          contrastThreshold: 4.5,
          primary: {
            main: themeColor.hex,
            contrastText: '#fff',
          },
        },
      }),
    [themeColor],
  )

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiTheme
