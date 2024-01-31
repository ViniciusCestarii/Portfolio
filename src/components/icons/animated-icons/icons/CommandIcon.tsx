import AnimatedIconInHover from '@/components/icons/animated-icons/AnimatedIconOnHover'
import ICON from '@/json/command.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const CommandIcon = (props: BaseAnimatedIconProps) => {
  return (
    <AnimatedIconInHover
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-blinking"
      inAnimation="in-reveal"
    />
  )
}

export default CommandIcon
