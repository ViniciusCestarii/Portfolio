import ICON from '@/json/conversation.json'
import AnimatedIconInHover from './AnimatedIconInHover'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const ConversationIcon = (props: BaseAnimatedIconProps) => {
  return (
    <AnimatedIconInHover
      {...props}
      jsonIcon={ICON}
      inAnimation="in-reveal"
      hoverAnimation="hover-conversation-alt"
    />
  )
}

export default ConversationIcon
