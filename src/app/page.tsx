import Contact from '@/components/page/contact'
import Home from '@/components/page/home'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

export default function MainPage() {
  return (
    <Box
      component="main"
      sx={{
        maxWidth: '1280px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        px: { xs: 4, sm: 8 },
        gap: 4,
      }}
    >
      <Home />
      <Contact />
      <Typography
        color="textPrimary"
        variant="h4"
        sx={{ textAlign: 'center', py: 8 }}
      >
        🚧 In construction 🚧
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        <Link href="https://lordicon.com/" target="_blank">
          Icons by Lordicon.com 👑
        </Link>
      </Typography>
    </Box>
  )
}
