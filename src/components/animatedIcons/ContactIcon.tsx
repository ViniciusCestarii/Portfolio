import ICON from '@/json/contact.json'
import { Player } from '@lordicon/react'
import { Box, BoxProps } from '@mui/material'
import { useRef, useEffect, useState } from 'react'

interface ContactIconProps extends BoxProps {
  colorize?: string
  trigger: any
  size?: number
}

const ContactIcon = (props: ContactIconProps) => {
  const { colorize, trigger, size } = props

  const playerRef = useRef<Player>(null)
  const [state, setState] = useState<'in-phone 2' | 'hover-phone-ring'>(
    'in-phone 2',
  )

  useEffect(() => {
    playerRef.current?.playFromBeginning()
  }, [])

  useEffect(() => {
    if (!playerRef.current?.isPlaying) {
      if (state === 'in-phone 2') {
        setState('hover-phone-ring')
      }
      playerRef.current?.playFromBeginning()
    }
  }, [trigger, state])

  return (
    <Box component={'div'} sx={{ width: 'fit-content', ...props.sx }}>
      <Player
        ref={playerRef}
        icon={ICON}
        state={state}
        colorize={colorize}
        size={size}
      />
    </Box>
  )
}

export default ContactIcon
