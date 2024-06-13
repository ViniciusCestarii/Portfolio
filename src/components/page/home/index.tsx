import { Box } from '@mui/material'
import Hero from './hero/Hero'

const Home = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mt: '-80px',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '::before': {
          content: '""',
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          maxWidth: '100%',
          overflow: 'hidden',
          width: '70%',
          height: '100px',
          borderRadius: '100% 100% 0 0',
          backgroundColor: 'primary.dark',
          filter: 'blur(60px) hue-rotate(10deg)',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          bottom: -120,
        },
        '::after': {
          content: '""',
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          maxWidth: '80%',
          overflow: 'hidden',
          width: '100%',
          height: '100px',
          borderRadius: '100% 100% 0 0',
          backgroundColor: 'primary.dark',
          filter: 'blur(60px) hue-rotate(20deg)',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          bottom: -100,
        },
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          maxWidth: '100%',
          overflow: 'hidden',
          width: '50%',
          height: '4px',
          backgroundColor: 'primary.dark',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          bottom: -2,
          opacity: '0.3',
        }}
      />
      <Hero />
    </Box>
  )
}

export default Home
