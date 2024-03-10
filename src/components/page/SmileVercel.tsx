import { Box, BoxProps, Typography, useTheme } from '@mui/material'
import SmileIcon from '../icons/animated-icons/icons/Smile'
import Link from 'next/link'
import { useState } from 'react'

interface SmileVercelProps {
  boxProps: BoxProps
}

const SmileVercel = ({ boxProps }: SmileVercelProps) => {
  const theme = useTheme()
  const [trigger, setTrigger] = useState(false)

  return (
    <Box
      {...boxProps}
      component="div"
      onMouseEnter={() => setTrigger(!trigger)}
      onMouseLeave={() => setTrigger(!trigger)}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '16px',
        p: '0.5rem',
        border: `2px solid ${theme.palette.primary.dark}`,
        ...boxProps.sx,
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
        Smile you are being watched by{' '}
        <Link
          href="https://vercel.com/analytics"
          target="_blank"
          className="link"
        >
          Vercel Analytics
        </Link>
      </Typography>
    </Box>
  )
}

export default SmileVercel
