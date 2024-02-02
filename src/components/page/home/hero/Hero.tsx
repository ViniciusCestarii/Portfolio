'use client'
import EyeIcon from '@/components/icons/animated-icons/icons/EyeIcon'
import { useMyTheme } from '@/context/themeContext'
import { Box, Typography } from '@mui/material'
import HeroTypography from './HeroTypography'

const Hero = () => {
  const myTheme = useMyTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <EyeIcon
        trigger={myTheme}
        invertXTrigger={myTheme.themeColorIndex % 2 === 0}
        colorize={myTheme.themeColor.hex}
        size={184}
      />
      <HeroTypography sx={{ mt: '-32px' }}>Vinicius Cestari</HeroTypography>
      <Typography
        color="textPrimary"
        variant="h2"
        sx={{
          fontSize: { xs: '32px', sm: '46px' },
        }}
      >
        Full-Stack Developer
      </Typography>
    </Box>
  )
}

export default Hero
