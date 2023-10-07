import { useState, useEffect } from 'react'

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  const isClient = typeof window !== 'undefined'

  const [value, setValue] = useState<T>(() => {
    if (isClient) {
      const storedValue = localStorage.getItem(key)
      return storedValue ? JSON.parse(storedValue) : initialValue
    }
    return initialValue
  })

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value, isClient])

  return [value, setValue]
}

export default useLocalStorage
