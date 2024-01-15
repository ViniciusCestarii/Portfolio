import ICON from '@/json/eye.json'
import DynamicAnimatedIcon from '@/components/icons/animated-icons/icons/DynamicAnimatedIcon'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const EyeIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIcon
      {...props}
      jsonIcon={ICON}
      inAnimation="in-reveal"
      hoverAnimation="hover-blink"
      triggerAnimation="hover-look-around"
    />
  )
}

export default EyeIcon
