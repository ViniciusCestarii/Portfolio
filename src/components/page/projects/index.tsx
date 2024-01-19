'use client'
import Subtitle from '@/components/layout/Subtitle'
import { Box, useTheme } from '@mui/material'
import ProjectItem from '@/components/page/projects/ProjectItem'
import COINICON from '@/json/coin.json'
import CATICON from '@/json/cat.json'
import PUSHUPSICON from '@/json/pushups.json'
import BARCHART from '@/json/bar-chart.json'
import { ProjectItemProps } from '@/types/layout/Project'
import SeeAllProjects from './SeeAllProjects'

const Projects = () => {
  const theme = useTheme()

  const projects: ProjectItemProps[] = [
    {
      title: 'IBGE Data Charts',
      projectLink:
        'https://github.com/ViniciusCestarii/IBGE-data-charts?tab=readme-ov-file#ibge-data-charts-',
      applicationLink: 'https://ibge-data-charts.vercel.app/',
      animatedIconProps: {
        noIconHover: true,
        colorize: theme.palette.primary.main,
        inAnimation: 'in-diversified',
        hoverAnimation: 'loop-all',
        jsonIcon: BARCHART,
        size: 150,
      },
      description:
        'IBGE Chart Data unleash the power of IBGE data through dynamic charts and visualizations. Explore economic trends, demographic shifts, and more across geographical levels. IBGE Chart Data makes complex data accessible and actionable for everyone.',
    },
    {
      title: 'Find A Friend',
      projectLink:
        'https://github.com/ViniciusCestarii/FindAFriendWeb?tab=readme-ov-file#find-a-friend-',
      animatedIconProps: {
        noIconHover: true,
        colorize: theme.palette.primary.main,
        inAnimation: 'hover-pinch',
        hoverAnimation: 'hover-pinch',
        jsonIcon: CATICON,
        size: 158,
      },
      description:
        'FindAFriend connects you with adorable adoptable pets near you! Discover dogs, cats, rabbits, and more waiting for their forever homes. Animal shelters and rescue groups, post your precious animals and find loving families quickly and easily.',
    },
    {
      title: 'Molas Futura Website',
      privateProject: true,
      animatedIconProps: {
        noIconHover: true,
        colorize: theme.palette.primary.main,
        inAnimation: 'in-reveal',
        hoverAnimation: 'hover-spending',
        jsonIcon: COINICON,
        size: 142,
      },
      description:
        'Molas Futura Website is a website for a company that sells and installs spring machines. Built with the latest technologies, it is a modern, fast, responsive, and SEO-friendly website.',
    },
    {
      title: 'Gym Pass',
      projectLink:
        'https://github.com/ViniciusCestarii/GymPassBack?tab=readme-ov-file#gym-pass-%EF%B8%8F',
      animatedIconProps: {
        noIconHover: true,
        colorize: theme.palette.primary.main,
        inAnimation: 'hover-pinch',
        hoverAnimation: 'hover-pinch',
        jsonIcon: PUSHUPSICON,
        size: 144,
      },
      description:
        'Gym Pass help you check in seamlessly with a single tap on your phone. Explore a diverse network of gyms near you. Track your own progress.Gyms, can join the platform and tap into a stream of motivated members. all within the app.',
    },
  ]

  return (
    <Box
      component="div"
      sx={{
        position: 'relative',
        '::before': {
          content: '""',
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          maxWidth: '100%',
          overflow: 'hidden',
          width: '140%',
          height: '4px',
          backgroundColor: 'primary.dark',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: -2,
          opacity: '0.3',
          transition: 'all 0.75s ease-in-out',
        },
        pt: '1rem',
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Subtitle>Projects</Subtitle>
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-around' },
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </Box>
      <SeeAllProjects />
    </Box>
  )
}

export default Projects
