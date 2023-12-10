'use client'
import { Box, Typography, useTheme } from '@mui/material'

const Contact = () => {
  const theme = useTheme()
  return (
    <Typography
      color="textPrimary"
      variant="h2"
      id="contact"
      sx={{
        position: 'relative',
        width: 'fit-content',
        '&:hover': { transform: 'scale(1.1)' },
      }}
    >
      Contact
      <Box
        component="div"
        sx={{
          position: 'absolute',
          width: '100%',
          height: 4,
          background: theme.palette.primary.main,
          bottom: 10,
          left: 2,
          filter: 'blur(10px)',
          opacity: 0.8,
        }}
      />
      <Box
        component="div"
        sx={{
          position: 'absolute',
          width: '80%',
          height: 4,
          background: theme.palette.primary.dark,
          bottom: 10,
          left: '10%',
          filter: 'blur(2px)',
          borderRadius: '100%',
          opacity: 0.8,
        }}
      />
    </Typography>
  )
}

export default Contact
