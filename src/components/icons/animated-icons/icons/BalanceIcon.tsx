import ICON from '@/json/balance.json'
import AnimatedIconInHover from '@/components/icons/animated-icons/AnimatedIconOnHover'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const BalanceIcon = (props: BaseAnimatedIconProps) => {
  return (
    <AnimatedIconInHover
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-pinch"
      inAnimation="hover-pinch"
    />
  )
}

export default BalanceIcon
