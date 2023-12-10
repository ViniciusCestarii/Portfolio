'use client'
import { Box, Typography, useTheme } from '@mui/material'

interface SubtitleProps {
  id?: string
  children: string
}

const Subtitle = ({ id, children }: SubtitleProps) => {
  const theme = useTheme()
  return (
    <Typography
      color="textPrimary"
      variant="h2"
      id={id}
      sx={{
        position: 'relative',
        width: 'fit-content',
      }}
    >
      {children}
      <Box
        component="div"
        sx={{
          position: 'absolute',
          width: '120%',
          height: 4,
          background: theme.palette.primary.main,
          bottom: 10,
          left: '-8%',
          filter: 'blur(10px)',
          opacity: 0.8,
        }}
      />
      <Box
        component="div"
        sx={{
          position: 'absolute',
          width: '90%',
          height: 4,
          background: theme.palette.primary.dark,
          bottom: 10,
          left: '8%',
          filter: 'blur(2px)',
          borderRadius: '100%',
          opacity: 0.8,
        }}
      />
    </Typography>
  )
}

export default Subtitle
