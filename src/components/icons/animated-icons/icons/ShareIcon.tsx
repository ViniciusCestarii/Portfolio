import ICON from '@/json/share.json'
import AnimatedIconInHover from '@/components/icons/animated-icons/AnimatedIconOnHover'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const ShareIcon = (props: BaseAnimatedIconProps) => {
  return (
    <AnimatedIconInHover
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-slide"
      inAnimation="in-reveal"
    />
  )
}

export default ShareIcon
