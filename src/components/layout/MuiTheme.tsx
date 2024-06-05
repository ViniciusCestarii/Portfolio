'use client'
import { useMyTheme } from '@/context/themeContext'
import { ThemeProvider } from '@emotion/react'
import {
  createTheme,
  responsiveFontSizes,
  rgbToHex,
} from '@mui/material/styles'
import { ReactNode } from 'react'

interface MuiThemeProps {
  children: ReactNode
}

const MuiTheme = ({ children }: MuiThemeProps) => {
  const { themeColor } = useMyTheme()

  const theme = responsiveFontSizes(
    createTheme({
      components: {
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              h1: 'h1',
              h2: 'h2',
              h3: 'h3',
              h4: 'h3',
              h5: 'h3',
              h6: 'h3',
            },
          },
        },
      },
      palette: {
        mode: 'dark',
        contrastThreshold: 4.5,
        primary: {
          main: themeColor.hex,
          contrastText: '#EDEDED',
        },
        text: {
          primary: '#EDEDED',
          secondary: '#C4C4CC',
        },
      },
      typography: {
        h1: {
          letterSpacing: '-3px',
          fontWeight: 400,
        },
        h2: {
          letterSpacing: '-1px',
          fontWeight: 400,
        },
        caption: {
          fontSize: '0.8rem',
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

  theme.components = {
    ...theme.components,
    MuiTypography: {
      ...theme.components?.MuiTypography,
      styleOverrides: {
        ...theme.components?.MuiTypography?.styleOverrides,
        root: {
          transition: 'color 0.75s ease-in-out',
          '::selection': {
            color: theme.palette.text.primary,
            backgroundColor: rgbToHex(theme.palette.primary.main) + 'CC',
          },
        },
      },
    },
    ...theme.components,
    MuiButton: {
      ...theme.components?.MuiButton,
      styleOverrides: {
        ...theme.components?.MuiButton?.styleOverrides,
        root: {
          transition: 'all 0.75s ease-in-out',
        },
      },
    },
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiTheme
