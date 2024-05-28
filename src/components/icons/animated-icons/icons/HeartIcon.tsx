import ICON from '@/json/heart.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import DynamicAnimatedIconOnHover from '../DynamicAnimatedIconInHover'

const HeartIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIconOnHover
      {...props}
      jsonIcon={ICON}
      inAnimation="in-heart"
      hoverAnimation="hover-heart-1"
    />
  )
}

export default HeartIcon
