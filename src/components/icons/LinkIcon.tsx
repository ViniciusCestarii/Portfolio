import { Icon, IconProps } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

interface LinkIconProps extends IconProps {
  link: string
  icon: string
}

const LinkIcon = ({ icon, link, ...props }: LinkIconProps) => {
  return (
    <Link href={link} target="_blank">
      <Icon icon={icon} {...props} style={{ transition: 'none !important' }} />
    </Link>
  )
}

export default LinkIcon
