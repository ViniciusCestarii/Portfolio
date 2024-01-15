import ICON from '@/json/contact.json'
import DynamicAnimatedIcon from '@/components/icons/animated-icons/icons/DynamicAnimatedIcon'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const ContactIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIcon
      {...props}
      jsonIcon={ICON}
      inAnimation="in-phone 2"
      hoverAnimation="hover-phone-ring"
    />
  )
}

export default ContactIcon
