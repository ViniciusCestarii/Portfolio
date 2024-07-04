'use client'
import { Box } from '@mui/material'
import TechnologyItem from './TechnologyItem'
import { DictionaryProps } from '@/dictionaries/getDictionary'

const TechnologiesList = ({ dict }: DictionaryProps) => {
  const { technologyItens } = dict.section.knowledge
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: { xs: 'center', md: 'space-around' },
        flexWrap: 'wrap',
        position: 'relative',
        gap: { xs: '1.5rem', sm: '2rem' },
      }}
    >
      {technologyItens.map((technology) => (
        <TechnologyItem key={technology.title} {...technology} />
      ))}
    </Box>
  )
}

export default TechnologiesList
