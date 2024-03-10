import PageContainer from '@/components/layout/PageContainer'
import Footer from '@/components/page/Footer'
import Contact from '@/components/page/contact'
import Home from '@/components/page/home'
import Knowledge from '@/components/page/knowledge'
import Projects from '@/components/page/projects'
import { Box } from '@mui/material'

export default function MainPage() {
  return (
    <Box component="main" className="color-transition">
      <Home />
      <PageContainer>
        <>
          <Projects />
          <Knowledge />
          <Contact />
        </>
      </PageContainer>
      <Footer />
    </Box>
  )
}
