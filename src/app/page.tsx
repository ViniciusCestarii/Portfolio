import dynamic from 'next/dynamic'
import PageContainer from '@/components/layout/PageContainer'
import Footer from '@/components/page/Footer'
import Contact from '@/components/page/contact'
import Home from '@/components/page/home'
import Knowledge from '@/components/page/knowledge'
import Projects from '@/components/page/projects'
import { Box } from '@mui/material'

export default function MainPage() {
  const BackgroundScene = dynamic(
    () => import('@/components/page/home/canva/ThreeScene'),
    {
      ssr: false,
    },
  )

  return (
    <Box component="main" className="color-transition">
      <Box component="div" sx={{ display: { xs: 'block', md: 'none' } }}>
        <BackgroundScene
          style={{
            width: '100vw',
            height: '100vh',
            maxWidth: '100%',
            position: 'absolute',
          }}
        />
      </Box>
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
