import LoadingCLient from '@/components/layout/LoadingCLient'
import PageContainer from '@/components/layout/PageContainer'
import Contact from '@/components/page/contact'
import Home from '@/components/page/home'
import Knowledge from '@/components/page/knowledge'
import Projects from '@/components/page/projects'
import { DictionaryKeyType, getDictionary } from '@/dictionaries/getDictionary'
import { Box } from '@mui/material'

interface MainPageProps {
  params: {
    lang: DictionaryKeyType
  }
}

export default async function MainPage({ params: { lang } }: MainPageProps) {
  const dict = await getDictionary(lang)

  return (
    <Box component="main">
      <Home dict={dict} />
      <PageContainer>
        <Contact dict={dict} />
        <Projects dict={dict} />
        <Knowledge />
      </PageContainer>
      <LoadingCLient />
    </Box>
  )
}
