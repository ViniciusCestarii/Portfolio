import ICON from '@/json/colors.json'
import { Player } from '@lordicon/react'
import { Box, BoxProps } from '@mui/material'
import { useRef, useEffect, useState } from 'react'

interface ColorsIconProps extends BoxProps {
  colorize?: string
  trigger: any
  size?: number
}

const ColorsIcon = (props: ColorsIconProps) => {
  const { colorize, trigger, size } = props

  const playerRef = useRef<Player>(null)
  const [state, setState] = useState<'in-category' | 'hover-category'>(
    'in-category',
  )

  useEffect(() => {
    playerRef.current?.playFromBeginning()
  }, [])

  useEffect(() => {
    if (!playerRef.current?.isPlaying) {
      if (state === 'in-category') {
        setState('hover-category')
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

export default ColorsIcon
