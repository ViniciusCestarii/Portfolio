'use client'
import useLocalStorage from '@/hooks/useLocalStorage'
import { ThemeColor } from '@/types/layout/Theme'
import React, {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
} from 'react'

const themeColors: ThemeColor[] = [
  {
    hex: '#2E995E',
    name: 'green',
  },
  {
    hex: '#2C76C6',
    name: 'blue',
  },
  {
    hex: '#7A63D2',
    name: 'purple',
  },
  {
    hex: '#DB2316',
    name: 'red',
  },
  {
    hex: '#F5A92A',
    name: 'yellow',
  },
]

interface ThemeContextType {
  themeColor: ThemeColor
  toggleTheme: () => void
  themeColorIndex: number
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeColor, setThemeColor] = useLocalStorage('color', themeColors[0])

  const toggleTheme = useCallback(() => {
    const currentIndex = themeColors.findIndex(
      (color) => color.name === themeColor.name,
    )
    const nextIndex = (currentIndex + 1) % themeColors.length
    const nextTheme = themeColors[nextIndex]
    setThemeColor(nextTheme)
  }, [themeColor, setThemeColor])

  const contextValue = useMemo(
    () => ({
      themeColor,
      toggleTheme,
      themeColorIndex: themeColors.findIndex(
        (color) => color.name === themeColor.name,
      ),
    }),
    [themeColor, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useMyTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeProvider
