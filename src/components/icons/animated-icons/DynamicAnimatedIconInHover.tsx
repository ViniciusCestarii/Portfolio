'use client'
import { AnimatedIconOnHoverProps } from '@/types/layout/AnimatedIcon'
import dynamic from 'next/dynamic'

const AnimatedIconOnHover = dynamic(() => import('./AnimatedIconOnHover'), {
  ssr: false,
})

const DynamicAnimatedIconOnHover = (props: AnimatedIconOnHoverProps) => {
  return <AnimatedIconOnHover {...props} />
}

export default DynamicAnimatedIconOnHover
