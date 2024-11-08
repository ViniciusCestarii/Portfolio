import ICON from '@/json/book.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import DynamicAnimatedIconOnHover from '../DynamicAnimatedIconInHover'

const BookIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIconOnHover
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-closed"
      inAnimation="in-reveal"
    />
  )
}

export default BookIcon
