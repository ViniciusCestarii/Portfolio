'use client'
import { Box } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'

export default function Home() {
  const theme = useTheme()

  return (
    <main>
      <Box sx={{ minHeight: '200vh' }}></Box>
    </main>
  )
}
