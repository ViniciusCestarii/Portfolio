import ICON from '@/json/conversation.json'
import DynamicAnimatedIcon from '@/components/icons/animated-icons/icons/DynamicAnimatedIcon'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'

const ConversationIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIcon
      {...props}
      jsonIcon={ICON}
      inAnimation="in-reveal"
      hoverAnimation="hover-conversation-alt"
    />
  )
}

export default ConversationIcon
