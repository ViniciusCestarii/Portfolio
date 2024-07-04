import Subtitle from '@/components/layout/Subtitle'
import { Box } from '@mui/material'
import TechnologiesGraph from '@/components/chart/TechnologiesGraph'
import GithubWordCloud from '@/components/chart/GithubWordCloud'
import TechnologiesList from './TechnologiesList'
import FloatingIcons from './FloatingIcons'
import { Suspense } from 'react'
import { DictionaryProps } from '@/dictionaries/getDictionary'

const Knowledge = (props: DictionaryProps) => {
  return (
    <>
      <Box
        component="section"
        sx={{
          position: 'relative',
          pt: '1rem',
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Subtitle>{props.dict.section.knowledge.name}</Subtitle>
        <TechnologiesList {...props} />
        <FloatingIcons {...props} />
      </Box>
      <TechnologiesGraph {...props} />
      <Suspense fallback={null}>
        <GithubWordCloud {...props} />
      </Suspense>
    </>
  )
}

export default Knowledge
