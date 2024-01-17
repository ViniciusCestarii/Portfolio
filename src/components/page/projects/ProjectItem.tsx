import { Box, Typography, useTheme } from '@mui/material'
import AnimatedIconOnHover from '@/components/icons/animated-icons/AnimatedIconOnHover'
import { useState } from 'react'
import { AnimationDirection } from 'lottie-web'
import { ProjectItemProps } from '@/types/layout/Project'

const ProjectItem = ({
  title,
  description,
  animatedIconProps,
}: ProjectItemProps) => {
  const theme = useTheme()
  const [direction, setDirection] = useState<AnimationDirection | undefined>()
  return (
    <Box
      onMouseEnter={() => setDirection(1)}
      onMouseLeave={() => setDirection(-1)}
      sx={{
        width: '100%',
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
          height: '400%',
          left: '-1px',
          position: 'absolute',
          top: '-1px',
          width: '400% ',
          scale: '10',
          zIndex: -1,
          transition: 'all 1s ease-in-out',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgb(14, 14, 20)',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          p: '0.5rem',
        }}
      >
        <Box
          sx={{
            width: '100%',
            minHeight: 160,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
          }}
        >
          <AnimatedIconOnHover {...animatedIconProps} direction={direction} />
        </Box>
        <Typography variant="h5" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default ProjectItem
