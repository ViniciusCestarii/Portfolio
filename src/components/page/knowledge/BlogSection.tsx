'use client'

import { Box, BoxProps, Typography, useTheme } from '@mui/material'
import { DictionaryProps } from '@/dictionaries/getDictionary'
import BookIcon from '@/components/icons/animated-icons/icons/BookIcon'
import { useState } from 'react'
import Link from 'next/link'

interface BlogSectionProps extends DictionaryProps, BoxProps {}

const BlogSection = ({ dict, ...props }: BlogSectionProps) => {
  const theme = useTheme()

  const [trigger, setTrigger] = useState(false)

  const { name, link } = dict.section.knowledge.blogLink

  const color = trigger
    ? theme.palette.primary.light
    : theme.palette.primary.main

  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        ...props.sx,
      }}
    >
      <Link
        href={link}
        target="_blank"
        onMouseEnter={() => setTrigger(true)}
        onMouseLeave={() => setTrigger(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          color,
        }}
      >
        <BookIcon trigger={trigger} colorize={color} size={100} />
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{
            maxWidth: '5rem',
          }}
        >
          {name}!
        </Typography>
      </Link>
    </Box>
  )
}

export default BlogSection
