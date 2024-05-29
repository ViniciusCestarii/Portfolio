'use client'

import useIsClient from '@/hooks/useIsClient'
import { Box, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'

const LoadingCLient = () => {
  const [wait, setWait] = useState(true)
  const { isClient } = useIsClient()

  const theme = useTheme()

  useEffect(() => {
    if (!isClient) return

    setTimeout(() => {
      setWait(false)
    }, 600)

    return () => {
      setWait(true)
    }
  }, [isClient])

  return (
    <div
      className={`inset-0 z-[99999] fixed bg-[var(--background-color)] h-full w-full ${!wait ? 'hidden' : ''}`}
    >
      <div className="flex justify-center items-center h-full w-full">
        <Box
          className={`animate-spin rounded-full h-32 w-32`}
          sx={{
            borderColor: theme.palette.primary.main,
            borderTopWidth: 4,
            borderBottomWidth: 4,
          }}
        />
      </div>
    </div>
  )
}

export default LoadingCLient
