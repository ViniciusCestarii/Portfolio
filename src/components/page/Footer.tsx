'use client'
import { Box, Typography, useTheme, rgbToHex } from '@mui/material'
import Link from 'next/link'
import Logo from '../layout/Logo'
import LinkIcon from '../icons/LinkIcon'

const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: 80,
        backgroundColor: rgbToHex(theme.palette.primary.main) + '10',
        ':before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: 2,
          width: '100%',
          backgroundColor: rgbToHex(theme.palette.primary.main) + '60',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          maxWidth: 900,
          width: '100%',
          p: '1.5rem',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            gap: '1rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Logo />
            <Typography variant="h6" color="textPrimary" fontWeight={500}>
              Vinicius Cestari
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Full Stack Developer
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '0.5rem',
                mt: 1,
              }}
            >
              <LinkIcon
                link="https://www.linkedin.com/in/-vinicius-cestari/"
                icon="simple-icons:linkedin"
                color={theme.palette.primary.light}
                width={20}
                height={20}
              />
              <LinkIcon
                link="https://github.com/ViniciusCestarii"
                icon="simple-icons:github"
                color={theme.palette.primary.light}
                width={20}
                height={20}
              />
              <LinkIcon
                link="mailto:viniciuscestari01@gmail.com"
                icon="simple-icons:gmail"
                color={theme.palette.primary.light}
                width={20}
                height={20}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" color="textSecondary">
              © {new Date().getFullYear()} Vinicius Cestari. All rights
              reserved.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Released under the MIT License.
            </Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant="body2" color="textSecondary">
              <Link href="https://lordicon.com/" target="_blank">
                Icons by Lordicon.com 👑
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
