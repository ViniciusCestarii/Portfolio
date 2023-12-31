import ICON from '@/json/home.json'
import AnimatedIconInHover from '@/components/icons/animated-icons/AnimatedIconOnHover'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const HomeIcon = (props: BaseAnimatedIconProps) => {
  return (
    <AnimatedIconInHover
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-home-2"
      inAnimation="in-home"
    />
  )
}

export default HomeIcon
