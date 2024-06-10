'use client'

import { useTheme } from '@mui/material'
import { useState } from 'react'
import ICON from '@/json/home.json'

import dynamic from 'next/dynamic'
import { changeScrollbarColor } from '@/utils/theme/changeScrollbarColor'

const DynamicPlayer = dynamic(
  () => import('@lordicon/react').then((module) => module.Player),
  {
    ssr: false,
  },
)

const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1517.333}
    height={1517.333}
    viewBox="0 0 1138 1138"
    {...props}
  >
    <path d="M26 147.3c0 .2.6 1.7 1.4 3.3.8 1.6 11.2 27.2 23.1 56.9 20.8 51.8 39 96.9 72 179 8.4 20.9 21.9 54.4 30 74.5 8.1 20.1 21.6 53.6 30 74.5 8.4 20.9 25.1 62.3 37 92 11.9 29.7 27.2 67.7 34 84.5 14.9 36.9 34.4 85.3 62 154 35.4 88 43.2 107.4 44.6 110.2l1.2 2.8H516l1.4-2.3c.8-1.2 8.5-19.8 17.1-41.2 8.6-21.5 21.3-53 28.2-70 6.9-17.1 20.4-50.6 30-74.5 9.6-23.9 22.2-55.2 28-69.5 5.8-14.3 21.1-52.3 34-84.5 12.9-32.2 28.2-70.2 34-84.5 5.8-14.3 18.4-45.6 28-69.5 9.6-23.9 24-59.7 32-79.5 8-19.8 22.8-56.7 33-82 10.2-25.3 23.7-58.8 30-74.5 6.3-15.7 17.5-43.6 24.9-62 7.4-18.4 13.9-34.3 14.4-35.2.6-1 1-2 1-2.3 0-1-144.4-.5-150.9.6-17.9 2.9-33.2 14.9-43 33.9-2.1 4.1-6.8 15.4-10.4 25-7 19-24.2 64.8-55.7 149.5-11.1 29.7-23.8 63.7-28.2 75.5-4.4 11.8-15.1 40.6-23.8 64-8.7 23.4-23.6 63.2-33 88.5-9.5 25.3-20.8 55.7-25.2 67.5-4.4 11.8-10.9 30.1-14.4 40.7-8.9 26.9-24.4 85.4-24.4 92 0 4.9-2.7.5-5-8-8.2-30.5-21.3-72.1-32-101.7-12.7-35-180.9-483-183.6-488.9-7.1-15.8-16.2-25.9-28.8-32.1-13.7-6.8-16-7-96.8-7-39 0-70.8.2-70.8.3zM939 705.7c-27.1 1.6-53 9.9-73.3 23.5-27.4 18.1-50.8 49.1-60.7 80.3-5.3 16.7-6.3 24.2-6.3 45-.1 20.3 1.3 30.3 6 45 3.8 12 14 32.5 20.9 42 21.4 29.7 51.7 49.5 90.9 59.4 13.6 3.4 42.7 3.7 58.2.5 21.3-4.3 46.5-15.4 62.8-27.7 17.1-12.8 30.9-28.9 41.2-48.2 10.2-18.9 14.7-33 16.8-52 1.9-16.4 1.9-22 0-37.5-4.7-40.8-28.5-79.9-64.1-105.3-23.1-16.5-61.5-26.9-92.4-25z" />
  </svg>
)

const LoadingClient = () => {
  const [isReady, setIsReady] = useState(false)

  const theme = useTheme()

  const handleReady = () => {
    changeScrollbarColor(theme.palette.primary.main)

    document.body.style.overflow = 'auto'
    setIsReady(true)
  }

  return (
    <div
      className={`inset-0 z-[99999] fixed bg-[var(--background-color)] h-full w-full ${isReady ? 'hidden' : ''}`}
    >
      <div className="flex -mt-12 justify-center items-center h-full w-full relative">
        <LogoIcon
          className="select-none size-12"
          style={{
            fill: theme.palette.primary.main,
          }}
        />
        <DynamicPlayer onReady={handleReady} icon={ICON} />
        <LogoIcon
          className="select-none size-12 animate-ping absolute"
          style={{
            fill: theme.palette.primary.main,
          }}
        />
      </div>
    </div>
  )
}

export default LoadingClient
