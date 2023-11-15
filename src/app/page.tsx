'use client'
import { Box } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'
import RainbowScene from '@/components/canva/RainbowScene'

export default function Home() {
  return (
    <main>
      <Box sx={{ minHeight: '200vh' }}>
        <RainbowScene />
      </Box>
    </main>
  )
}
