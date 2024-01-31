import PageContainer from '@/components/layout/PageContainer'
import Footer from '@/components/page/Footer'
import Contact from '@/components/page/contact'
import Home from '@/components/page/home'
import Knowledge from '@/components/page/knowledge'
import Projects from '@/components/page/projects'
import { Box, Typography } from '@mui/material'

export default function MainPage() {
  return (
    <Box component="main" className="color-transition">
      <Home />
      <PageContainer>
        <>
          <Projects />
          <Knowledge />
          <Contact />
          <Typography
            color="textPrimary"
            variant="caption"
            sx={{ textAlign: 'center', py: 8, fontSize: '1.5rem' }}
          >
            🚧 In construction 🚧
          </Typography>
          <Footer />
        </>
      </PageContainer>
    </Box>
  )
}
