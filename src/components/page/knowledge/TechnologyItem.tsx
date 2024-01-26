'use client'
import { Box, Typography, useTheme } from '@mui/material'
import * as icons from '@icons-pack/react-simple-icons'
import { TechnologyItemProps } from '@/types/layout/Knowledge'
import { Alert } from 'mdi-material-ui'
import { useState } from 'react'

const TechnologyItem = ({
  description,
  iconName,
  technologieLink,
  title,
}: TechnologyItemProps) => {
  const theme = useTheme()
  const [trigger, setTrigger] = useState(false)

  const Icon = (icons as any)[iconName] ?? Alert
  return (
    <Box
      onMouseEnter={() => setTrigger(true)}
      onMouseLeave={() => setTrigger(false)}
      sx={{
        borderRadius: '14px',
        maxWidth: '300px',
        p: '1.5rem',
        gap: '1rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box>
        <Icon color="#FFF" width={32} height={32} />
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
