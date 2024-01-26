'use client'

import Subtitle from '@/components/layout/Subtitle'
import { TechnologyItemProps } from '@/types/layout/Knowledge'
import { Box, useTheme } from '@mui/material'
import TechnologyItem from './TechnologyItem'

const technologies: TechnologyItemProps[] = [
  {
    title: 'Next.js',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiNextdotjs',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'React',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiReact',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Typescript',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiTypescript',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'PostgreSQL',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiPostgresql',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Bun',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiBun',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Node.js',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiNodedotjs',
    technologieLink: 'https://www.google.com',
  },
]
// ver v0 para pegar inspiração

const Knowledge = () => {
  const theme = useTheme()
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
          <TechnologyItem key={technology.title} {...technology} />
        ))}
      </Box>
    </Box>
  )
}

export default Knowledge
