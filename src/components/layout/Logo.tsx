import { scrollToElement } from '@/utils/router/router'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  router?: boolean
  black?: boolean
}

const Logo = ({ router, black, ...props }: LogoProps) => {
  let style = black ? '' : 'invert'
  style += router ? ' cursor-pointer' : ''
  return (
    <Image
      onClick={router ? () => scrollToElement('home') : () => null}
      src={'/logo.svg'}
      height={48}
      width={48}
      priority
      alt="Vinicius Cestari logo"
      {...props}
      className={`${style} ${props?.className}`}
    />
  )
}

export default Logo
