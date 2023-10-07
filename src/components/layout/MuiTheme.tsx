'use client'
import { useTheme } from '@/context/themeContext'
import { ThemeProvider } from '@emotion/react'
import { Backdrop } from '@mui/material'
import createTheme from '@mui/material/styles/createTheme'
import { ReactNode, useEffect, useMemo, useState } from 'react'

interface MuiThemeProps {
  children: ReactNode
}

const MuiTheme = ({ children }: MuiThemeProps) => {
  const { themeColor } = useTheme()
  const isClient = typeof window !== 'undefined'

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isClient) setMounted(true)
  }, [isClient])

  const theme = useMemo(() => {
    if (mounted) {
      return createTheme({
        palette: {
          contrastThreshold: 4.5,
          primary: {
            main: themeColor.hex,
            contrastText: '#fff',
          },
        },
      })
    }
    return createTheme()
  }, [themeColor, mounted])

  if (!mounted) return <Backdrop open={true} /> // put animation instead

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiTheme
