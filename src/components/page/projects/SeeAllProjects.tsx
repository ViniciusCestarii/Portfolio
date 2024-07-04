import SearchIcon from '@/components/icons/animated-icons/icons/SearchIcon'
import { DictionaryProps } from '@/dictionaries/getDictionary'
import { Typography, useTheme, Box } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

const SeeAllProjects = ({ dict }: DictionaryProps) => {
  const theme = useTheme()
  const [trigger, setTrigger] = useState(false)
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: { xs: 'center', md: 'end' },
        alignItems: 'center',
      }}
    >
      <SearchIcon
        size={24}
        colorize={theme.palette.primary.light}
        trigger={trigger}
      />
      <Link
        href="https://github.com/ViniciusCestarii?tab=repositories"
        target="_blank"
        style={{
          color: theme.palette.primary.main,
        }}
      >
        <Typography
          variant="body2"
          color="primary.light"
          onMouseEnter={() => setTrigger(!trigger)}
          onMouseLeave={() => setTrigger(!trigger)}
        >
          {dict.section.projects.seeAllProjects}
        </Typography>
      </Link>
    </Box>
  )
}

export default SeeAllProjects
