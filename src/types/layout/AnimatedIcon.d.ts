import { BoxProps } from '@mui/material'
import { AnimationDirection } from 'lottie-web'

export interface BaseAnimatedIconProps extends BoxProps {
  colorize?: string
  trigger?: unknown
  invertXTrigger?: boolean
  size?: number
  direction?: AnimationDirection
  noIconHover?: boolean
  noIconClick?: boolean
}

export interface AnimatedIconOnHoverProps extends BaseAnimatedIconProps {
  inAnimation: string
  hoverAnimation: string
  triggerAnimation?: string
  jsonIcon: unknown
}
