import DynamicAnimatedIconOnHover from '@/components/icons/animated-icons/DynamicAnimatedIconInHover'
import LockIcon from '@/components/icons/animated-icons/icons/LockIcon'
import ShareIcon from '@/components/icons/animated-icons/icons/ShareIcon'
import { ProjectItemType } from '@/dictionaries/dictionary'
import { DictionaryProps } from '@/dictionaries/getDictionary'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Box, Tooltip, Typography, useTheme } from '@mui/material'
import { AnimationDirection } from 'lottie-web'
import Link from 'next/link'
import { useState } from 'react'

interface ProjectItemProps extends ProjectItemType, DictionaryProps {}

const ProjectItem = ({
  title,
  description,
  animatedIconProps,
  projectLink,
  applicationLink,
  privateProject,
  dict,
}: ProjectItemProps) => {
  const theme = useTheme()
  const [direction, setDirection] = useState<AnimationDirection | undefined>()
  const { projects } = dict.section
  return (
    <Box
      onMouseEnter={() => setDirection(1)}
      onMouseLeave={() => setDirection(-1)}
      component="article"
      sx={{
        width: '100%',
        minHeight: 400,
        maxWidth: 340,
        position: 'relative',
        padding: '0.5rem',
        borderRadius: '14px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        ':hover': {
          '&::before': {
            opacity: 0.8,
          },
        },
        '::before': {
          animation: 'spin 5s linear infinite',
          background: `repeating-conic-gradient(from 0deg, ${theme.palette.primary.light} 0, ${theme.palette.primary.dark} 14%, ${theme.palette.primary.dark} 36%, ${theme.palette.primary.light} 50%)`,
          content: '""',
          opacity: 0,
          height: 80,
          left: '50%',
          position: 'absolute',
          top: '50%',
          width: 80,
          scale: '10',
          zIndex: -1,
          transition: 'all 0.75s ease-in-out',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--background-color)',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          p: '0.5rem',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: 160,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
          }}
        >
          <DynamicAnimatedIconOnHover
            {...animatedIconProps}
            direction={direction}
          />
        </Box>
        <Typography variant="h5" color="textPrimary">
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            height: '100%',
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            mt: '0.25rem',
            gap: '0.5rem',
            alignItems: 'center',
          }}
        >
          {privateProject && (
            <Tooltip title={projects.privateProject} describeChild>
              <Box>
                <LockIcon colorize={theme.palette.primary.main} size={26} />
              </Box>
            </Tooltip>
          )}
          {projectLink && (
            <Link
              target="_blank"
              href={projectLink}
              style={{
                display: 'flex',
                gap: '0.5rem',
                color: theme.palette.primary.main,
              }}
            >
              <Typography variant="body2" color="primary">
                {projects.knowMore}
              </Typography>
              <Tooltip title={projects.openProject}>
                <Icon
                  role="img"
                  aria-label="Github Icon"
                  icon="simple-icons:github"
                  color="white"
                  width={20}
                  height={20}
                />
              </Tooltip>
            </Link>
          )}
          {applicationLink && (
            <Tooltip title={projects.viewLiveApplication}>
              <Link target="_blank" href={applicationLink}>
                <ShareIcon colorize={theme.palette.primary.main} size={24} />
              </Link>
            </Tooltip>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectItem
