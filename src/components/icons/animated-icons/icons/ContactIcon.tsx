import ICON from '@/json/contact.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import DynamicAnimatedIconOnHover from '../DynamicAnimatedIconInHover'

const ContactIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIconOnHover
      {...props}
      jsonIcon={ICON}
      inAnimation="in-phone 2"
      hoverAnimation="hover-phone-ring"
    />
  )
}

export default ContactIcon
