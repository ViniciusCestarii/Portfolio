import DocumentIcon from '@/components/icons/animated-icons/icons/DocumentIcon'
import { Button, useTheme } from '@mui/material'
import React, { useState } from 'react'

interface CurriculumProps {
  href: string
  name: string
}

const Curriculum = ({ href, name }: CurriculumProps) => {
  const [trigger, setTrigger] = useState(false)
  const theme = useTheme()
  return (
    <Button
      variant="outlined"
      component="a"
      target="_blank"
      href={href}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        textDecoration: 'none',
      }}
      onMouseEnter={() => setTrigger((prev) => !prev)}
    >
      {name}{' '}
      <DocumentIcon
        colorize={theme.palette.primary.dark}
        size={32}
        trigger={trigger}
      />{' '}
    </Button>
  )
}

export default Curriculum
