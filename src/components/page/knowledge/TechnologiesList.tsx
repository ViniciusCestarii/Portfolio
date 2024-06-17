'use client'
import { TechnologyItemProps } from '@/types/layout/Knowledge'
import { Box } from '@mui/material'
import TechnologyItem from './TechnologyItem'
import FloatingIcons from './FloatingIcons'

const technologies: TechnologyItemProps[] = [
  {
    title: 'Next.js',
    description: 'React framework for server-side rendering and static sites.',
    iconName: 'simple-icons:nextdotjs',
    technologyLink: 'https://nextjs.org/',
  },
  {
    title: 'React',
    description: 'JavaScript library for building user interfaces.',
    iconName: 'simple-icons:react',
    technologyLink: 'https://reactjs.org/',
  },
  {
    title: 'MUI',
    description: "React UI framework based on Google's Material Design.",
    iconName: 'simple-icons:mui',
    technologyLink: 'https://mui.com/',
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid development.',
    iconName: 'simple-icons:tailwindcss',
    technologyLink: 'https://tailwindcss.com/',
  },
  {
    title: 'TypeScript',
    description: 'Statically typed superset of JavaScript.',
    iconName: 'simple-icons:typescript',
    technologyLink: 'https://www.typescriptlang.org/',
  },
  {
    title: 'Express.js',
    description: 'Minimal Node.js web framework for building web applications.',
    iconName: 'simple-icons:express',
    technologyLink: 'https://expressjs.com/',
  },
  {
    title: 'Fastify',
    description: 'Fast and low overhead web framework for Node.js.',
    iconName: 'simple-icons:fastify',
    technologyLink: 'https://www.fastify.io/',
  },
  {
    title: 'Prisma',
    description: 'Open-source database toolkit for TypeScript and Node.js.',
    iconName: 'simple-icons:prisma',
    technologyLink: 'https://www.prisma.io/',
  },
  {
    title: 'Drizzle',
    description: 'Lightweight and performant TypeScript ORM',
    iconName: 'simple-icons:drizzle',
    technologyLink: 'https://orm.drizzle.team/',
  },
  {
    title: '.NET',
    description:
      'Cross-platform developer platform for building various applications.',
    iconName: 'simple-icons:dotnet',
    technologyLink: 'https://dotnet.microsoft.com/',
  },
  {
    title: 'C#',
    description:
      'Modern, object-oriented programming language developed by Microsoft.',
    iconName: 'simple-icons:csharp',
    technologyLink: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    title: 'Docker',
    description:
      'Platform for developinga and shipping applications inside containers.',
    iconName: 'simple-icons:docker',
    technologyLink: 'https://www.docker.com/',
  },
  {
    title: 'PostgreSQL',
    description: 'Powerful open-source relational database management system.',
    iconName: 'simple-icons:postgresql',
    technologyLink: 'https://www.postgresql.org/',
  },
  {
    title: 'Bun',
    description:
      'Toolkit specifically designed for JavaScript and TypeScript projects.',
    iconName: 'simple-icons:bun',
    technologyLink: 'https://bunjs.org/',
  },
  {
    title: 'Node.js',
    description:
      'Runtime environment for executing JavaScript code outside the browser.',
    iconName: 'simple-icons:nodedotjs',
    technologyLink: 'https://nodejs.org/',
  },
  {
    title: 'AWS',
    description: 'Comprehensive cloud computing platform provided by Amazon.',
    iconName: 'simple-icons:amazonaws',
    technologyLink: 'https://aws.amazon.com/',
  },
  {
    title: 'Firebase',
    description:
      'App development platform with real-time database and hosting.',
    iconName: 'simple-icons:firebase',
    technologyLink: 'https://firebase.google.com/',
  },
  {
    title: 'Vercel',
    description:
      'Cloud platform for static sites and serverless functions deployment.',
    iconName: 'simple-icons:vercel',
    technologyLink: 'https://vercel.com/',
  },
  {
    title: 'Git',
    description:
      'Distributed version control system for tracking changes in source code.',
    iconName: 'simple-icons:git',
    technologyLink: 'https://git-scm.com/',
  },
  {
    title: 'GitHub',
    description: 'Web-based platform for version control using Git.',
    iconName: 'simple-icons:github',
    technologyLink: 'https://github.com/',
  },
  {
    title: 'GitLab',
    description:
      'Web-based DevOps lifecycle tool with Git repository management.',
    iconName: 'simple-icons:gitlab',
    technologyLink: 'https://about.gitlab.com/',
  },
]

const TechnologiesList = () => {
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
      {technologies.map((technology) => (
        <TechnologyItem key={technology.title} {...technology} />
      ))}
    </Box>
  )
}

export default TechnologiesList
