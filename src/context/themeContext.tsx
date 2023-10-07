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
    hex: '#4ade80',
    name: 'green',
  },
  {
    hex: '#50e3c2',
    name: 'teal',
  },
  {
    hex: '#4ea6f9',
    name: 'blue',
  },
  {
    hex: '#a085f5',
    name: 'purple',
  },
  {
    hex: '#f7afff',
    name: 'pink',
  },
  {
    hex: '#db2316',
    name: 'red',
  },
  {
    hex: '#ffbe0b',
    name: 'yellow',
  },
  {
    hex: '#fa783c',
    name: 'orange',
  },
]

interface ThemeContextType {
  themeColor: ThemeColor
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
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
    () => ({ themeColor, toggleTheme }),
    [themeColor, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
