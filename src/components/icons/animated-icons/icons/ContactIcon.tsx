import ICON from '@/json/contact.json'
import AnimatedIconInHover from '@/components/icons/animated-icons/AnimatedIconOnHover'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const ContactIcon = (props: BaseAnimatedIconProps) => {
  return (
    <AnimatedIconInHover
      {...props}
      jsonIcon={ICON}
      inAnimation="in-phone 2"
      hoverAnimation="hover-phone-ring"
    />
  )
}

export default ContactIcon
