import ICON from '@/json/colors.json'
import DynamicAnimatedIcon from '@/components/icons/animated-icons/icons/DynamicAnimatedIcon'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const ColorsIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIcon
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-category"
      inAnimation="in-category"
    />
  )
}

export default ColorsIcon
