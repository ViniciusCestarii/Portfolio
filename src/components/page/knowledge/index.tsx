'use client'

import ApiIcon from '@/components/icons/animated-icons/icons/ApiIcon'
import CodeForkIcon from '@/components/icons/animated-icons/icons/CodeForkIcon'
import CommandIcon from '@/components/icons/animated-icons/icons/CommandIcon'
import ServerIcon from '@/components/icons/animated-icons/icons/ServerIcon'
import Subtitle from '@/components/layout/Subtitle'
import { TechnologyItemProps } from '@/types/layout/Knowledge'
import { Box, useTheme } from '@mui/material'
import TechnologyItem from './TechnologyItem'

const technologies: TechnologyItemProps[] = [
  {
    title: 'Next.js',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:nextdotjs',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'React',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:react',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'MUI',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:mui',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Tailwind CSS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:tailwindcss',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Typescript',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:typescript',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Express.js',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:express',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Fastify',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:fastify',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Prisma',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:prisma',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Drizzle',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:drizzle',
    technologieLink: 'https://www.google.com',
  },
  {
    title: '.NET',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:dotnet',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'C#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:csharp',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Docker',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:docker',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'PostgreSQL',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:postgresql',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Bun',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:bun',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Node.js',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:nodedotjs',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'AWS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:amazonaws',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Firebase',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:firebase',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Vercel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:vercel',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'Git',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:git',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'GitHub',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:github',
    technologieLink: 'https://www.google.com',
  },
  {
    title: 'GitLab',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    iconName: 'simple-icons:gitlab',
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
          position: 'relative',
          gap: '2rem',
        }}
      >
        {technologies.map((technology) => (
          <TechnologyItem key={technology.title} {...technology} />
        ))}
      </Box>
      <CommandIcon
        sx={{
          position: 'absolute',
          left: -8,
          top: '24%',
          transform: 'translate(-50%, -50%)',
        }}
        colorize={theme.palette.primary.dark}
        size={80}
      />
      <ApiIcon
        sx={{
          position: 'absolute',
          right: -58,
          top: '34%',
          transform: 'translate(-50%, -50%)',
        }}
        colorize={theme.palette.primary.dark}
        size={80}
      />
      <ServerIcon
        sx={{
          position: 'absolute',
          left: 4,
          top: '64%',
          transform: 'translate(-50%, -50%)',
        }}
        colorize={theme.palette.primary.dark}
        size={80}
      />
      <CodeForkIcon
        sx={{
          position: 'absolute',
          right: -60,
          top: '90%',
          transform: 'translate(-50%, -50%)',
        }}
        colorize={theme.palette.primary.dark}
        size={80}
      />
    </Box>
  )
}

export default Knowledge
