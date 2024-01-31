import AnimatedIconInHover from '@/components/icons/animated-icons/AnimatedIconOnHover'
import ICON from '@/json/api.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const ApiIcon = (props: BaseAnimatedIconProps) => {
  return (
    <AnimatedIconInHover
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-pinch"
      inAnimation="in-reveal"
    />
  )
}

export default ApiIcon
