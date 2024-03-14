'use client'
import { TechnologyItemProps } from '@/types/layout/Knowledge'
import { Icon } from '@iconify/react'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

const TechnologyItem = ({
  description,
  iconName,
  technologyLink,
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
        zIndex: 2,
        boxShadow: `${theme.palette.primary.main} 0px 4px 8px -4px`,
      }}
    >
      <Link href={technologyLink} target="_blank">
        <IconButton color="primary">
          <Icon icon={iconName} color="#FFF" width={32} height={32} />
        </IconButton>
      </Link>
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
