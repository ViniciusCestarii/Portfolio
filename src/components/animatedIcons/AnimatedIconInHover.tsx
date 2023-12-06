import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import { Player } from '@lordicon/react'
import { Box } from '@mui/material'
import { useRef, useEffect, useState } from 'react'

interface AnimatedIconInHoverProps extends BaseAnimatedIconProps {
  inAnimation: string
  hoverAnimation: string
  jsonIcon: any
}

const AnimatedIconInHover = (props: AnimatedIconInHoverProps) => {
  const { colorize, trigger, size, hoverAnimation, inAnimation, jsonIcon } =
    props

  const playerRef = useRef<Player>(null)
  const [state, setState] = useState(inAnimation)

  useEffect(() => {
    playerRef.current?.playFromBeginning()
  }, [])

  useEffect(() => {
    if (!playerRef.current?.isPlaying) {
      if (state === inAnimation) {
        setState(hoverAnimation)
      }
      playerRef.current?.playFromBeginning()
    }
  }, [trigger, state, hoverAnimation, inAnimation])

  return (
    <Box component={'div'} sx={{ width: 'fit-content', ...props.sx }}>
      <Player
        ref={playerRef}
        icon={jsonIcon}
        state={state}
        colorize={colorize}
        size={size}
      />
    </Box>
  )
}

export default AnimatedIconInHover
