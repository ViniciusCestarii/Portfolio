import Contact from '@/components/page/contact'
import Home from '@/components/page/home'
import { Box, Typography } from '@mui/material'

export default function MainPage() {
  return (
    <Box
      component="main"
      sx={{ maxWidth: '1280px', margin: '0 auto', px: { xs: 4, sm: 8 } }}
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
        <a href="https://lordicon.com/">Icons by Lordicon.com 👑</a>
      </Typography>
    </Box>
  )
}
