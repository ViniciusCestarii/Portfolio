'use client'
import ConversationIcon from '@/components/icons/animated-icons/Conversation'
import Subtitle from '@/components/layout/Subtitle'
import { Box, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Contact = () => {
  const theme = useTheme()
  const [trigger, setTrigger] = useState(false)
  return (
    <Box
      component="div"
      sx={{
        gap: { xs: 2, sm: 0 },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Subtitle id="contact">Contact</Subtitle>
      <Box
        component="div"
        sx={{ display: 'flex', flexDirection: 'column' }}
        onMouseEnter={() => setTrigger(!trigger)}
        onMouseDown={() => setTrigger(!trigger)}
      >
        <Box
          component="div"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ maxWidth: 640 }}
          >
            {
              "Hey there, don't hesitate to reach out! I'm always open to connecting with fellow enthusiasts, collaborators, or anyone who shares a passion for technology."
            }
          </Typography>
          <ConversationIcon
            trigger={trigger}
            colorize={theme.palette.primary.light}
            size={168}
          />
        </Box>
        <Box
          component="div"
          sx={{ gap: 0.5, display: 'flex', flexDirection: 'column' }}
        >
          <Typography
            variant="body1"
            color="textPrimary"
            sx={{ display: 'flex', gap: 1 }}
          >
            📧 Email:
            <Typography
              variant="body1"
              color="primary.light"
              sx={{ textDecoration: 'underline' }}
            >
              <Link href="mailto:viniciuscestari01@gmail.com">
                viniciuscestari01@gmail.com
              </Link>
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            sx={{ display: 'flex', gap: 1 }}
          >
            <Image
              alt="Github Icon"
              src={'assets/githubLogo.svg'}
              width={20}
              height={20}
              style={{ filter: 'invert()' }}
            />
            Github:
            <Typography
              variant="body1"
              color="primary.light"
              sx={{ textDecoration: 'underline' }}
            >
              <Link target="_blank" href="https://github.com/ViniciusCestarii">
                ViniciusCestarii
              </Link>
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            sx={{ display: 'flex', gap: 1 }}
          >
            <Image
              alt="Linkdin Icon"
              src={'assets/linkdinLogo.svg'}
              width={20}
              height={20}
              style={{ filter: 'invert()' }}
            />
            Linkdin:
            <Typography
              variant="body1"
              color="primary.light"
              sx={{ textDecoration: 'underline' }}
            >
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/-vinicius-cestari/"
              >
                Vinicius Cestari
              </Link>
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
