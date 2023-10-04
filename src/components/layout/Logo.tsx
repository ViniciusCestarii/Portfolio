import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  link?: boolean
}

const Logo = ({ link }: LogoProps) => {
  return link ? (
    <Image
      className="invert"
      src={'/logo.svg'}
      height={48}
      width={48}
      priority
      alt="Vinicius Cestarii logo"
    />
  ) : (
    <Link href="/">
      <Image
        className="invert cursor-pointer"
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
