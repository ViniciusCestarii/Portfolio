import ICON from '@/json/api.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import DynamicAnimatedIconOnHover from '../DynamicAnimatedIconInHover'

const ApiIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIconOnHover
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-pinch"
      inAnimation="in-reveal"
    />
  )
}

export default ApiIcon
