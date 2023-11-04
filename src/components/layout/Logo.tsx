import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  link?: boolean
  black?: boolean
}

const Logo = ({ link, black }: LogoProps) => {
  const style = black ? '' : 'invert'
  return link ? (
    <Image
      className={style}
      src={'/logo.svg'}
      height={48}
      width={48}
      priority
      alt="Vinicius Cestarii logo"
    />
  ) : (
    <Link href="/">
      <Image
        className={style + ' cursor-pointer'}
        src={'/logo.svg'}
        height={48}
        width={48}
        priority
        alt="Vinicius Cestarii logo"
      />
    </Link>
  )
}

export default Logo
