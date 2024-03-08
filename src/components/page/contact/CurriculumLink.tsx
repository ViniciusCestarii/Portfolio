import DocumentIcon from '@/components/icons/animated-icons/icons/DocumentIcon'
import { Button, useTheme } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

interface CurriculumLinkProps {
  href: string
  name: string
}

const CurriculumLink = ({ href, name }: CurriculumLinkProps) => {
  const [trigger, setTrigger] = useState(false)
  const theme = useTheme()
  return (
    <Link
      target="_blank"
      href={href}
      onMouseEnter={() => setTrigger((prev) => !prev)}
      style={{ textDecoration: 'none' }}
    >
      <Button
        variant="outlined"
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        {name}{' '}
        <DocumentIcon
          colorize={theme.palette.primary.dark}
          size={32}
          trigger={trigger}
        />{' '}
      </Button>
    </Link>
  )
}

export default CurriculumLink
