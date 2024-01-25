import ICON from '@/json/lock.json'
import AnimatedIconInHover from '@/components/icons/animated-icons/AnimatedIconOnHover'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const LockIcon = (props: BaseAnimatedIconProps) => {
  return (
    <AnimatedIconInHover
      {...props}
      jsonIcon={ICON}
      inAnimation="in-reveal"
      hoverAnimation="hover-locked"
    />
  )
}

export default LockIcon
