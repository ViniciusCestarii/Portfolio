'use client'

import { useEffect, useState } from 'react'
import createCache from '@emotion/cache'
import { useServerInsertedHTML } from 'next/navigation'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useMyTheme } from '@/context/themeContext'

interface ThemeRegistryProps {
  options?: any
  children: React.ReactNode
}

const ThemeRegistry = (props: ThemeRegistryProps) => {
  const { options, children } = props

  const { themeColor } = useMyTheme()

  const theme = createTheme({
    palette: {
      mode: 'dark',
      contrastThreshold: 4.5,
      primary: {
        main: themeColor.hex,
        contrastText: '#DDDDFF',
      },
      text: {
        primary: '#DDDDFF',
        secondary: '#c4c4cc',
      },
    },
  })

  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options)
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: unknown[] = []
    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names: any = flush()
    if (names.length === 0) {
      return null
    }
    let styles = ''
    for (const name of names) {
      styles += cache.inserted[name]
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    )
  })

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}

export default ThemeRegistry
