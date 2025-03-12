'use client'
import { Box, BoxProps, Typography, useTheme } from '@mui/material'
import SmileIcon from '../../icons/animated-icons/icons/Smile'
import { useState } from 'react'
import { DictionaryProps } from '@/dictionaries/getDictionary'

interface SmileVercelProps extends DictionaryProps {
  boxProps: BoxProps
}

const SmileVercel = ({ boxProps, dict }: SmileVercelProps) => {
  const { proudlySelfHost } = dict.section.knowledge

  const theme = useTheme()
  const [trigger, setTrigger] = useState(false)

  return (
    <Box
      {...boxProps}
      onMouseEnter={() => setTrigger(!trigger)}
      onMouseLeave={() => setTrigger(!trigger)}
      sx={{
        display: { xs: 'none', sm: 'flex' },
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '16px',
        p: '0.5rem',
        border: `2px solid ${theme.palette.primary.dark}`,
        ...boxProps?.sx,
      }}
    >
      <SmileIcon
        trigger={trigger}
        colorize={theme.palette.primary.dark}
        size={80}
      />
      <Typography
        variant="caption"
        color="primary"
        sx={{
          width: { xs: 80, sm: 110 },
          textAlign: 'center',
          '& .link': {
            transition: 'none !important',
          },
        }}
      >
        {proudlySelfHost}
      </Typography>
    </Box>
  )
}

export default SmileVercel
