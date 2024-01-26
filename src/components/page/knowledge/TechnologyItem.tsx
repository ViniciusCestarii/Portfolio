'use client'
import { Box, Typography, useTheme } from '@mui/material'
import * as icons from '@icons-pack/react-simple-icons'
import { TechnologyItemProps } from '@/types/layout/Knowledge'
import { Alert } from 'mdi-material-ui'

const TechnologyItem = ({
  description,
  iconName,
  technologieLink,
  title,
}: TechnologyItemProps) => {
  const theme = useTheme()
  const Icon = (icons as any)[iconName] ?? Alert
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '14px',
        maxWidth: '300px',
        p: '1.5rem',
        gap: '1rem',
        my: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        transition: 'box-shadow 1s linear !important',
        boxShadow: `${theme.palette.primary.main} 0px 4px 8px -4px`,
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
