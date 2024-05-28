import ICON from '@/json/home.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import DynamicAnimatedIconOnHover from '../DynamicAnimatedIconInHover'

const HomeIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIconOnHover
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-home-2"
      inAnimation="in-home"
    />
  )
}

export default HomeIcon
