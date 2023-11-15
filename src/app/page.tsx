'use client'
import { Box, Typography } from '@mui/material'
import RainbowScene from '@/components/canva/RainbowScene'

export default function Home() {
  return (
    <main>
      <Box
        component="div"
        sx={{
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <RainbowScene />
        <Box
          component="div"
          sx={{
            position: 'relative',
            py: 4,
            px: 8,
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <Box
            component="div"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 1,
            }}
          >
            <Box component="div">
              <Typography
                color="primary.light"
                variant="h3"
                sx={{ fontSize: { xs: '32px', md: '48px' } }}
              >
                Hi, {"I'm"}
              </Typography>
              <Typography
                color="textPrimary"
                variant="h1"
                sx={{ fontSize: { xs: '64px', md: '96px' } }}
              >
                Vinicius Cestari,
              </Typography>
            </Box>
            <Box component="div">
              <Typography
                color="textPrimary"
                variant="h1"
                sx={{ fontSize: { xs: '64px', xl: '96px' } }}
              >
                Full-Stack Developer
              </Typography>
              <Typography color="primary.light" variant="subtitle1">
                @ViniciusCestarii
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          right: '5%',
          top: '50%',
          opacity: 0.9,
          transform: 'translateY(-50%)',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography
          color="black"
          variant="h2"
          sx={{
            fontSize: { xs: '64px', xl: '96px' },
            fontStyle: 'italic',
            fontWeight: 'bold',
            textAlign: { xs: 'end', sm: 'start' },
          }}
        >
          {'"Let the'}
        </Typography>
        <Typography
          color="black"
          variant="h2"
          sx={{
            fontSize: { xs: '64px', xl: '96px' },
            fontStyle: 'italic',
            fontWeight: 'bold',
            textAlign: { xs: 'end', sm: 'start' },
          }}
        >
          {'colors flow"'}
        </Typography>
      </Box>
    </main>
  )
}
