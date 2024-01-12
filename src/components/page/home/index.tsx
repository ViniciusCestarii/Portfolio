import { Box, Typography } from '@mui/material'
import Hero from './hero/Hero'

const Home = () => {
  return (
    <Box
      component="div"
      sx={{
        minHeight: 'calc(100vh)',
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
          transition: 'all 1s ease-in-out',
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
          transition: 'all 1s ease-in-out',
        },
      }}
    >
      <Box>
        <Hero />
        <Typography
          color="textPrimary"
          variant="h2"
          textAlign={'center'}
          sx={{
            fontSize: { xs: '32px', xl: '46px' },
          }}
        >
          Full-Stack Developer
        </Typography>
      </Box>
    </Box>
  )
}

export default Home
