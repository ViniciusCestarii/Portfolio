'use client'

import Subtitle from '@/components/layout/Subtitle'
import { TechnologyItemProps } from '@/types/layout/Knowledge'
import { Box, useTheme } from '@mui/material'
import TechnologyItem from './TechnologyItem'
import CodeForkIcon from '@/components/icons/animated-icons/icons/CodeForkIcon'

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
    title: 'MUI',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiMui',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Tailwind CSS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiTailwindcss',
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
    title: 'Express.js',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiExpress',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Fastify',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiFastify',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Prisma',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiPrisma',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Drizzle',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiDrizzle',
    technologieLink: 'https://www.google.com',
  },
  {
    title: '.NET',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiDotnet',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'C#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiCsharp',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Docker',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiDocker',
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
  {
    title: 'AWS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiAmazonaws',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Firebase',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiFirebase',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Vercel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiVercel',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Git',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiGit',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'GitHub',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiGithub',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'GitLab',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'SiGitlab',
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
        position: 'relative',
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
      <CodeForkIcon
        sx={{
          position: 'absolute',
          right: -56,
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        colorize={theme.palette.primary.dark}
        size={80}
      />
    </Box>
  )
}

export default Knowledge
