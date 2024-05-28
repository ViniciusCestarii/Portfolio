import ICON from '@/json/document.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import DynamicAnimatedIconOnHover from '../DynamicAnimatedIconInHover'

const DocumentIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIconOnHover
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-swipe"
      inAnimation="in-reveal"
    />
  )
}

export default DocumentIcon
