import PageContainer from '@/components/layout/PageContainer'
import Contact from '@/components/page/contact'
import Home from '@/components/page/home'
import Projects from '@/components/page/projects'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

export default function MainPage() {
  return (
    <Box component="main">
      <Home />
      <PageContainer>
        <>
          <Projects />
          <Contact />
          <Typography
            color="textPrimary"
            variant="caption"
            sx={{ textAlign: 'center', py: 8, fontSize: '1.5rem' }}
          >
            🚧 In construction 🚧
          </Typography>
          <Typography variant="overline" color="textPrimary">
            <Link href="https://lordicon.com/" target="_blank">
              Icons by Lordicon.com 👑
            </Link>
          </Typography>
        </>
      </PageContainer>
    </Box>
  )
}
