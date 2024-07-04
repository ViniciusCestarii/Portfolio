'use client'
import Subtitle from '@/components/layout/Subtitle'
import { Box, useTheme } from '@mui/material'
import ProjectItem from '@/components/page/projects/ProjectItem'
import SeeAllProjects from './SeeAllProjects'
import { DictionaryProps } from '@/dictionaries/getDictionary'

const Projects = (props: DictionaryProps) => {
  const theme = useTheme()
  const { projects } = props.dict.section
  const { projectItens } = projects

  return (
    <Box
      component="section"
      sx={{
        pt: '1rem',
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Subtitle>{props.dict.section.projects.name}</Subtitle>
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-around' },
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        {projectItens.map((project) => (
          <ProjectItem
            key={project.title}
            {...props}
            {...project}
            animatedIconProps={{
              ...project.animatedIconProps,
              colorize: theme.palette.primary.main,
            }}
          />
        ))}
      </Box>
      <SeeAllProjects {...props} />
    </Box>
  )
}

export default Projects
