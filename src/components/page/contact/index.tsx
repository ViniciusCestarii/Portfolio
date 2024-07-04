'use client'
import ConversationIcon from '@/components/icons/animated-icons/icons/Conversation'
import Subtitle from '@/components/layout/Subtitle'
import { Box, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import ContactItem from './ContactItem'
import { DictionaryProps } from '@/dictionaries/getDictionary'
import Curriculum from './Curriculum'

const Contact = (props: DictionaryProps) => {
  const { contact } = props.dict.section
  const theme = useTheme()
  const [trigger, setTrigger] = useState(false)
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: 'relative',
        pt: '1rem',
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Subtitle>{contact.name}</Subtitle>
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
            {contact.greeting}
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
          component="address"
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
            linkText="in/-vinicius-cestari"
            imgAlt="Linkedin Icon"
            imgSrc="assets/linkedinLogo.svg"
            caption="Linkedin:"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        {Object.keys(contact.resume).map((key) => (
          <Curriculum
            key={key}
            {...contact.resume[key as keyof typeof contact.resume]}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Contact
