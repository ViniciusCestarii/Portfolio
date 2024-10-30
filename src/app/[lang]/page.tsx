import LoadingCLient from '@/components/layout/LoadingCLient'
import PageContainer from '@/components/layout/PageContainer'
import Contact from '@/components/page/contact/ContactSection'
import Home from '@/components/page/home/HomeSection'
import Knowledge from '@/components/page/knowledge/KnowledgeSection'
import Projects from '@/components/page/projects/ProjectsSection'
import {
  DictionaryKeyType,
  getDictionary,
  locales,
} from '@/dictionaries/getDictionary'
import { Box } from '@mui/material'

export const dynamicParams = false

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

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
        <Knowledge dict={dict} />
      </PageContainer>
      <LoadingCLient />
    </Box>
  )
}
