'use client'
import { Box, Typography, useTheme, rgbToHex } from '@mui/material'
import Link from 'next/link'
import Logo from '../layout/Logo'
import LinkIcon from '../icons/LinkIcon'
import BalanceIcon from '../icons/animated-icons/icons/BalanceIcon'
import { DictionaryProps } from '@/dictionaries/getDictionary'

const Footer = ({ dict }: DictionaryProps) => {
  const { footer } = dict.section

  const theme = useTheme()
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: 80,
        backgroundColor: rgbToHex(theme.palette.primary.main) + '10',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: 2,
          width: '100%',
          backgroundColor: rgbToHex(theme.palette.primary.main) + '60',
          transition: 'all 0.75s ease-in-out',
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
              {dict.hero.fullStackDeveloper}
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
                linkAriaLabel="LinkedIn Profile"
                icon="simple-icons:linkedin"
                width={20}
                height={20}
              />
              <LinkIcon
                link="https://github.com/ViniciusCestarii"
                linkAriaLabel="GitHub Profile"
                icon="simple-icons:github"
                width={20}
                height={20}
              />
              <LinkIcon
                link="mailto:viniciuscestari01@gmail.com"
                linkAriaLabel="Send me an email"
                icon="simple-icons:gmail"
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
            <Typography
              variant="caption"
              color="textSecondary"
              className="text-center"
            >
              © {new Date().getFullYear()} Vinicius Cestari.{' '}
              {footer.allRightsReserved}
            </Typography>
            <Box sx={{ display: 'flex', gap: '0.25rem' }}>
              <Typography
                variant="caption"
                color="textSecondary"
                sx={{ display: 'flex', gap: '0.25rem' }}
              >
                {footer.releasedUnderThe}{' '}
                <Link
                  target="_blank"
                  href="https://github.com/ViniciusCestarii/Portfolio/blob/main/LICENSE"
                >
                  {' '}
                  {footer.mitLicense}
                </Link>
                <BalanceIcon
                  colorize={theme.palette.text.secondary}
                  size={20}
                />
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ width: '100%' }}
          >
            <Link href="https://lordicon.com/" target="_blank">
              {footer.iconsByLordicon}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
