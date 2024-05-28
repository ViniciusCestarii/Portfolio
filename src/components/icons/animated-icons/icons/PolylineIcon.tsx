import ICON from '@/json/polyline.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import DynamicAnimatedIconOnHover from '../DynamicAnimatedIconInHover'

const PolylineIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIconOnHover
      {...props}
      jsonIcon={ICON}
      inAnimation="hover-pinch"
      hoverAnimation="hover-pinch"
    />
  )
}

export default PolylineIcon
