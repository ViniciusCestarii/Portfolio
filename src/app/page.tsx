import LoadingCLient from '@/components/layout/LoadingCLient'
import PageContainer from '@/components/layout/PageContainer'
import Contact from '@/components/page/contact'
import Home from '@/components/page/home'
import Knowledge from '@/components/page/knowledge'
import Projects from '@/components/page/projects'
import { Box } from '@mui/material'

export default function MainPage() {
  return (
    <Box component="main">
      <Home />
      <PageContainer>
        <Contact />
        <Projects />
        <Knowledge />
      </PageContainer>
      <LoadingCLient />
    </Box>
  )
}
