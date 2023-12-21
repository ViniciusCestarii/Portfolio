'use client'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import { Player } from '@lordicon/react'
import { Box } from '@mui/material'
import { useRef, useEffect, useState, RefObject } from 'react'

interface AnimatedIconOnHoverProps extends BaseAnimatedIconProps {
  inAnimation: string
  hoverAnimation: string
  triggerAnimation?: string
  jsonIcon: any
}

interface AnimateIcon {
  playerRef: RefObject<Player>
  state: string
  setState: React.Dispatch<React.SetStateAction<string>>
}

interface AnimateIconOnHover extends AnimateIcon {
  setState: React.Dispatch<React.SetStateAction<string>>
  hoverAnimation: string
}

interface AnimateIconOnTrigger extends AnimateIcon {
  setState: React.Dispatch<React.SetStateAction<string>>
  hoverAnimation: string
  triggerAnimation?: string
}

const animateIconOnHover = ({
  playerRef,
  setState,
  hoverAnimation,
}: AnimateIconOnHover) => {
  if (!playerRef.current?.isPlaying) {
    setState(hoverAnimation)
    playerRef.current?.playFromBeginning()
  }
}

const animateIconOnTrigger = ({
  playerRef,
  setState,
  triggerAnimation,
  hoverAnimation,
}: AnimateIconOnTrigger) => {
  if (!playerRef.current?.isPlaying) {
    setState(triggerAnimation ?? hoverAnimation)
    playerRef.current?.playFromBeginning()
  }
}

const AnimatedIconOnHover = (props: AnimatedIconOnHoverProps) => {
  const {
    colorize,
    trigger,
    size,
    hoverAnimation,
    triggerAnimation,
    inAnimation,
    jsonIcon,
    invertXTrigger,
  } = props

  const playerRef = useRef<Player>(null)
  const [state, setState] = useState(inAnimation)
  const [invertXIcon, setInvertXIcon] = useState(!invertXTrigger)

  useEffect(() => {
    if (!playerRef.current?.isPlaying) {
      setInvertXIcon(!invertXIcon)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invertXTrigger])

  useEffect(() => {
    playerRef.current?.playFromBeginning()
  }, [])

  useEffect(() => {
    animateIconOnTrigger({
      playerRef,
      state,
      setState,
      hoverAnimation,
      triggerAnimation,
    })
  }, [trigger, state, hoverAnimation, triggerAnimation])

  return (
    <Box
      component={'div'}
      sx={{
        width: 'fit-content',
        transform: invertXIcon ? 'scaleX(-1)' : '',
        ...props.sx,
      }}
      onMouseEnter={() =>
        animateIconOnHover({
          playerRef,
          state,
          setState,
          hoverAnimation,
        })
      }
    >
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

export default AnimatedIconOnHover
