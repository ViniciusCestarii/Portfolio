import AnimatedIconInHover from '@/components/icons/animated-icons/AnimatedIconOnHover'
import ICON from '@/json/document.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const DocumentIcon = (props: BaseAnimatedIconProps) => {
  return (
    <AnimatedIconInHover
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-swipe"
      inAnimation="in-reveal"
    />
  )
}

export default DocumentIcon
