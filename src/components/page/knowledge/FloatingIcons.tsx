'use client'
import ApiIcon from '@/components/icons/animated-icons/icons/ApiIcon'
import CodeForkIcon from '@/components/icons/animated-icons/icons/CodeForkIcon'
import CommandIcon from '@/components/icons/animated-icons/icons/CommandIcon'
import ServerIcon from '@/components/icons/animated-icons/icons/ServerIcon'
import { useTheme } from '@mui/material'
import SmileVercel from '../SmileVercel'

const FloatingIcons = () => {
  const theme = useTheme()
  return (
    <>
      <CommandIcon
        sx={{
          position: 'absolute',
          left: { xs: -2, md: 4 },
          top: '20%',
          scale: { xs: '0.8', sm: '1' },
          transform: 'translate(-50%, -50%)',
        }}
        colorize={theme.palette.primary.dark}
        size={80}
      />
      <ApiIcon
        sx={{
          position: 'absolute',
          right: -68,
          top: '34%',
          scale: { xs: '0.8', sm: '1' },
          transform: 'translate(-50%, -50%)',
        }}
        colorize={theme.palette.primary.dark}
        size={80}
      />
      <ServerIcon
        sx={{
          position: 'absolute',
          left: { xs: -4, md: 4 },
          top: '64%',
          scale: { xs: '0.8', sm: '1' },
          transform: 'translate(-50%, -50%)',
        }}
        colorize={theme.palette.primary.dark}
        size={80}
      />
      <CodeForkIcon
        sx={{
          position: 'absolute',
          left: { xs: 'auto', sm: 0 },
          right: { xs: -56, sm: 'auto' },
          top: '95%',
          scale: { xs: '0.8', sm: '1' },
          transform: 'translate(-50%, -50%)',
        }}
        colorize={theme.palette.primary.dark}
        size={80}
      />
      <SmileVercel
        boxProps={{
          sx: {
            position: 'absolute',
            right: { xs: -32, sm: -60, md: -80, lg: -108 },
            top: { xs: '80%', sm: '70%' },
          },
        }}
      />
    </>
  )
}

export default FloatingIcons
