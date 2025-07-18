'use client'

import { AnimatedIconOnHoverProps } from '@/types/layout/AnimatedIcon'
import { Player } from '@lordicon/react'
import { Box, useTheme } from '@mui/material'
import { useRef, useEffect, useState, RefObject } from 'react'

interface AnimateIconProps {
  playerRef: RefObject<Player>
  state: string
  setState: React.Dispatch<React.SetStateAction<string>>
  animation: string
}

const animateIcon = ({ playerRef, setState, animation }: AnimateIconProps) => {
  if (!playerRef.current?.isPlaying) {
    setState(animation)
    playerRef.current?.playFromBeginning()
  }
}

const AnimatedIconOnHover = ({
  colorize,
  trigger,
  size,
  hoverAnimation,
  triggerAnimation,
  inAnimation,
  jsonIcon,
  invertXTrigger,
  direction,
  noIconHover,
  noIconClick,
  sx,
  ...props
}: AnimatedIconOnHoverProps) => {
  const playerRef = useRef<Player>(null)
  const [state, setState] = useState(inAnimation)
  const [triggerHover, setTriggerHover] = useState(false)
  const [invertXIcon, setInvertXIcon] = useState(!invertXTrigger)

  useEffect(() => {
    if (!playerRef.current?.isPlaying) {
      setInvertXIcon(!invertXIcon)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invertXTrigger])

  const theme = useTheme()

  useEffect(() => {
    playerRef.current?.playFromBeginning()
  }, [])

  useEffect(() => {
    if (triggerHover) {
      animateIcon({
        playerRef,
        state,
        setState,
        animation: hoverAnimation,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerHover, hoverAnimation])

  useEffect(() => {
    animateIcon({
      playerRef,
      state,
      setState,
      animation: triggerAnimation ?? hoverAnimation,
    })
  }, [trigger, state, triggerAnimation, hoverAnimation, direction])

  const handleMouseEnter = () => {
    if (!noIconHover) {
      setTriggerHover((prev) => !prev)
    }
  }

  const handleMouseDown = () => {
    if (!noIconClick) {
      animateIcon({
        playerRef,
        state,
        setState,
        animation: hoverAnimation,
      })
    }
  }

  return (
    <Box
      component={'div'}
      sx={{
        width: 'fit-content',
        transform: invertXIcon ? 'scaleX(-1)' : '',
        ...sx,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseDown}
    >
      <Player
        {...props}
        ref={playerRef}
        icon={jsonIcon}
        state={state}
        colorize={colorize ?? theme.palette.primary.main}
        size={size}
        direction={
          playerRef.current?.currentState.name === inAnimation
            ? 1
            : (direction ?? 1)
        }
      />
    </Box>
  )
}

export default AnimatedIconOnHover
