'use client'
import ConversationIcon from '@/components/icons/animated-icons/icons/Conversation'
import Subtitle from '@/components/layout/Subtitle'
import { Box, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import ContactItem from './ContactItem'

const Contact = () => {
  const theme = useTheme()
  const [trigger, setTrigger] = useState(false)
  return (
    <Box
      component="div"
      id="contact"
      sx={{
        position: 'relative',
        pt: '1rem',
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Subtitle>Contact</Subtitle>
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
          }}
        >
          <Typography variant="body1" color="textSecondary">
            {
              "Hey there, don't hesitate to reach out! I'm always open to connecting with fellow enthusiasts, collaborators, or anyone who shares a passion for technology."
            }
          </Typography>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ConversationIcon
              trigger={trigger}
              colorize={theme.palette.primary.main}
              size={168}
            />
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            gap: 0.5,
            display: 'flex',
            flexDirection: 'column',
            mt: { xs: 0, md: -2 },
          }}
        >
          <ContactItem
            link="mailto:viniciuscestari01@gmail.com"
            linkText="viniciuscestari01@gmail.com"
            imgAlt="Email Icon"
            imgSrc="assets/email.svg"
            caption="Email:"
          />
          <ContactItem
            link="https://github.com/ViniciusCestarii"
            linkText="ViniciusCestarii"
            imgAlt="Github Icon"
            imgSrc="assets/githubLogo.svg"
            caption="Github:"
          />
          <ContactItem
            link="https://www.linkedin.com/in/-vinicius-cestari/"
            linkText="Vinicius Cestari"
            imgAlt="Linkdin Icon"
            imgSrc="assets/linkdinLogo.svg"
            caption="Linkdin:"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
