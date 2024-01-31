'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Icon } from '@iconify/react'
import { TechnologyItemProps } from '@/types/layout/Knowledge'

const TechnologyItem = ({
  description,
  iconName,
  technologieLink,
  title,
}: TechnologyItemProps) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '14px',
        maxWidth: '284px',
        p: '1.5rem',
        gap: '1rem',
        my: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        boxShadow: `${theme.palette.primary.main} 0px 4px 8px -4px`,
      }}
    >
      <Box>
        <Icon icon={iconName} color="#FFF" width={32} height={32} />
      </Box>
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
