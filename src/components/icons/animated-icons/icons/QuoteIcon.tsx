import ICON from '@/json/quotes.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import DynamicAnimatedIconOnHover from '../DynamicAnimatedIconInHover'

const QuoteIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIconOnHover
      {...props}
      jsonIcon={ICON}
      inAnimation="in-reveal"
      hoverAnimation="hover-draw"
    />
  )
}

export default QuoteIcon
