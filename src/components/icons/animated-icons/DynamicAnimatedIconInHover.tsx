import { AnimatedIconOnHoverProps } from '@/types/layout/AnimatedIcon'
import dynamic from 'next/dynamic'

const DynamicAnimatedIconOnHover = (props: AnimatedIconOnHoverProps) => {
  const AnimatedIconOnHover = dynamic(() => import('./AnimatedIconOnHover'), {
    ssr: false,
  })

  return <AnimatedIconOnHover {...props} />
}

export default DynamicAnimatedIconOnHover
