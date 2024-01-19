import ICON from '@/json/search.json'
import AnimatedIconInHover from '@/components/icons/animated-icons/AnimatedIconOnHover'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const SearchIcon = (props: BaseAnimatedIconProps) => {
  return (
    <AnimatedIconInHover
      {...props}
      jsonIcon={ICON}
      hoverAnimation="hover-spin"
      inAnimation="in-reveal"
    />
  )
}

export default SearchIcon
