import ICON from '@/json/conversation.json'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import DynamicAnimatedIconOnHover from '../DynamicAnimatedIconInHover'

const ConversationIcon = (props: BaseAnimatedIconProps) => {
  return (
    <DynamicAnimatedIconOnHover
      {...props}
      jsonIcon={ICON}
      inAnimation="in-reveal"
      hoverAnimation="hover-conversation-alt"
    />
  )
}

export default ConversationIcon
