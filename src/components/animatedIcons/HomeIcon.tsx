import ICON from '@/json/home.json'
import { Player } from '@lordicon/react'
import { Box, BoxProps } from '@mui/material'
import { useRef, useEffect, useState } from 'react'

interface HomeIconProps extends BoxProps {
  colorize?: string
  trigger: any
  size?: number
}

const HomeIcon = (props: HomeIconProps) => {
  const { colorize, trigger, size } = props

  const playerRef = useRef<Player>(null)
  const [state, setState] = useState<'in-home' | 'hover-home-2'>('in-home')

  useEffect(() => {
    playerRef.current?.playFromBeginning()
  }, [])

  useEffect(() => {
    if (!playerRef.current?.isPlaying) {
      if (state === 'in-home') {
        setState('hover-home-2')
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

export default HomeIcon
