'use client'
import Subtitle from '@/components/layout/Subtitle'
import { Box, useTheme } from '@mui/material'
import ProjectItem from '@/components/page/projects/ProjectItem'
import CHURCHICON from '@/json/church.json'
import GIFTICON from '@/json/gift.json'
import CATICON from '@/json/cat.json'
import PUSHUPSICON from '@/json/pushups.json'
import { ProjectItemProps } from '@/types/layout/Project'

const Projects = () => {
  const theme = useTheme()

  const projects: ProjectItemProps[] = [
    {
      title: 'Projeto Top',
      link: 'fdsafsd',
      animatedIconProps: {
        noIconHover: true,
        colorize: theme.palette.primary.main,
        inAnimation: 'hover-pinch',
        hoverAnimation: 'hover-roll',
        jsonIcon: CHURCHICON,
        size: 154,
      },
      description:
        'Cillum veniam esse ad esse tempor. Tempor ullamco et quis proident anim ut aliquip consequat commodo reprehenderit eu. Mollit aliquip quis labore exercitation esse sit elit ullamco. Ut occaecat non commodo quis exercitation aute.',
    },
    {
      title: 'Projeto Top',
      link: 'fdsafsd',
      animatedIconProps: {
        noIconHover: true,
        colorize: theme.palette.primary.main,
        inAnimation: 'hover-pinch',
        hoverAnimation: 'hover-pinch',
        jsonIcon: CATICON,
        size: 158,
      },
      description:
        'Cillum veniam esse ad esse tempor. Tempor ullamco et quis proident anim ut aliquip consequat commodo reprehenderit eu. Mollit aliquip quis labore exercitation esse sit elit ullamco. Ut occaecat non commodo quis exercitation aute.',
    },
    {
      title: 'Projeto Top',
      link: 'fdsafsd',
      animatedIconProps: {
        noIconHover: true,
        colorize: theme.palette.primary.main,
        inAnimation: 'in-reveal',
        hoverAnimation: 'morph-open',
        triggerAnimation: 'morph-open',
        jsonIcon: GIFTICON,
        size: 144,
      },
      description:
        'Cillum veniam esse ad esse tempor. Tempor ullamco et quis proident anim ut aliquip consequat commodo reprehenderit eu. Mollit aliquip quis labore exercitation esse sit elit ullamco. Ut occaecat non commodo quis exercitation aute.',
    },
    {
      title: 'Projeto Top',
      link: 'fdsafsd',
      animatedIconProps: {
        noIconHover: true,
        colorize: theme.palette.primary.main,
        inAnimation: 'hover-pinch',
        hoverAnimation: 'hover-pinch',
        jsonIcon: PUSHUPSICON,
        size: 144,
      },
      description:
        'Cillum veniam esse ad esse tempor. Tempor ullamco et quis proident anim ut aliquip consequat commodo reprehenderit eu. Mollit aliquip quis labore exercitation esse sit elit ullamco. Ut occaecat non commodo quis exercitation aute.',
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
          transition: 'all 1s ease-in-out',
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
    </Box>
  )
}

export default Projects
