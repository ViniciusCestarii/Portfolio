import Subtitle from '@/components/layout/Subtitle'
import { Box } from '@mui/material'
import TechnologiesGraph from '@/components/chart/TechnologiesGraph'
import GithubWordCloud from '@/components/chart/GithubWordCloud'
import TechnologiesList from './TechnologiesList'
import FloatingIcons from './FloatingIcons'
import { Suspense } from 'react'

const Knowledge = () => {
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
        <Subtitle>Knowledge</Subtitle>
        <TechnologiesList />
        <FloatingIcons />
      </Box>
      <TechnologiesGraph />
      <Suspense fallback={null}>
        <GithubWordCloud />
      </Suspense>
    </>
  )
}

export default Knowledge
