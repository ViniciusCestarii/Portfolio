'use client'
import React from 'react'
import { BaseAnimatedIconProps } from '@/types/layout/AnimatedIcon'
import { Skeleton } from '@mui/material'
import dynamic from 'next/dynamic'

interface AnimatedIconOnHoverProps extends BaseAnimatedIconProps {
  inAnimation: string
  hoverAnimation: string
  triggerAnimation?: string
  jsonIcon: any
}

const AnimatedIconOnHover = dynamic(
  () => import('@/components/icons/animated-icons/AnimatedIconOnHover'),
  {
    ssr: false,
    loading: () => <Skeleton variant="circular" />,
  },
)

const DynamicAnimatedIcon = (props: AnimatedIconOnHoverProps) => {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [setIsClient])

  if (!isClient) {
    return (
      <Skeleton variant="circular" width={props.size} height={props.size} />
    )
  }

  return <AnimatedIconOnHover {...props} />
}

export default DynamicAnimatedIcon
