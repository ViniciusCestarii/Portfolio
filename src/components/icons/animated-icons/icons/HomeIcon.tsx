import ICON from '@/json/home.json'
import DynamicAnimatedIcon from '@/components/icons/animated-icons/icons/DynamicAnimatedIcon'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const HomeIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIcon
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-home-2"
      inAnimation="in-home"
    />
  )
}

export default HomeIcon
