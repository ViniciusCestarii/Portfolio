'use client'
import { TechnologyItemProps } from '@/types/layout/Knowledge'
import { Icon } from '@iconify/react'
import { Box, IconButton, Typography, useTheme } from '@mui/material'

const TechnologyItem = ({
  description,
  iconName,
  technologyLink,
  title,
}: TechnologyItemProps) => {
  const theme = useTheme()
  return (
    <Box
      component="article"
      sx={{
        position: 'relative',
        borderRadius: '14px',
        maxWidth: '284px',
        p: '1.5rem',
        gap: '1rem',
        my: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        zIndex: 2,
        boxShadow: `${theme.palette.primary.main} 0px 4px 8px -4px`,
      }}
    >
      <IconButton
        component="a"
        href={technologyLink}
        aria-label={`Read more about ${title}`}
        target="_blank"
        color="primary"
      >
        <Icon icon={iconName} color="#FFF" width={32} height={32} />
      </IconButton>
      <Box sx={{ gap: '0.25rem', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default TechnologyItem
