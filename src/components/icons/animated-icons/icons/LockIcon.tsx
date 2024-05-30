import ICON from '@/json/lock.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import DynamicAnimatedIconOnHover from '../DynamicAnimatedIconInHover'

const LockIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIconOnHover
      {...props}
      jsonIcon={ICON}
      inAnimation="in-reveal"
      hoverAnimation="hover-locked"
    />
  )
}

export default LockIcon
