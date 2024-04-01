import { Icon, IconProps } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

interface LinkIconProps extends IconProps {
  link: string
  linkAriaLabel?: string
  icon: string
}

const LinkIcon = ({ icon, link, linkAriaLabel, ...props }: LinkIconProps) => {
  return (
    <Link href={link} target="_blank" aria-label={linkAriaLabel}>
      <Icon icon={icon} {...props} style={{ transition: 'none !important' }} />
    </Link>
  )
}

export default LinkIcon
