import ICON from '@/json/smile.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import DynamicAnimatedIconOnHover from '../DynamicAnimatedIconInHover'

const SmileIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIconOnHover
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-smile"
      inAnimation="in-reveal"
    />
  )
}

export default SmileIcon
