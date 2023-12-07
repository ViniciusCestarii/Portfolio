import { scrollToElement } from '@/utils/router/router'
import Image from 'next/image'

interface LogoProps {
  router?: boolean
  black?: boolean
}

const Logo = ({ router, black }: LogoProps) => {
  const style = black ? '' : 'invert'
  return (
    <Image
      onClick={router ? () => scrollToElement('home') : () => null}
      className={style}
      src={'/logo.svg'}
      height={48}
      width={48}
      priority
      alt="Vinicius Cestarii logo"
    />
  )
}

export default Logo
