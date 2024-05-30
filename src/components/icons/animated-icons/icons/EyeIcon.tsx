import ICON from '@/json/eye.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import DynamicAnimatedIconOnHover from '../DynamicAnimatedIconInHover'

const EyeIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIconOnHover
      {...props}
      jsonIcon={ICON}
      inAnimation="in-reveal"
      hoverAnimation="hover-blink"
      triggerAnimation="hover-look-around"
    />
  )
}

export default EyeIcon
