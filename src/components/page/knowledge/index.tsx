'use client'

import Subtitle from '@/components/layout/Subtitle'
import { KnowledgeItemProps } from '@/types/layout/Knowledge'
import { Box } from '@mui/material'

const technologies: KnowledgeItemProps[] = [
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    title: 'Lorem ipsum dolor',
    technologieLink: 'https://www.google.com',
  },
]
// ver v0 para pegar inspiração

const Knowledge = () => {
  return (
    <Box
      component="div"
      sx={{
        pt: '1rem',
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Subtitle>Knowledge</Subtitle>

      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-around' },
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        {technologies.map((technology) => (
          <div key={technology.title} />
        ))}
      </Box>
    </Box>
  )
}

export default Knowledge
