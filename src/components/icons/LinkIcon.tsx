import { Icon, IconProps } from '@iconify/react/dist/iconify.js'
import { useTheme } from '@mui/material'
import Link from 'next/link'

interface LinkIconProps extends IconProps {
  link: string
  linkAriaLabel?: string
}

const LinkIcon = ({ icon, link, linkAriaLabel, ...props }: LinkIconProps) => {
  const theme = useTheme()

  return (
    <Link href={link} target="_blank" aria-label={linkAriaLabel}>
      <Icon
        icon={icon}
        {...props}
        color={props.color ?? theme.palette.primary.light}
        style={{ transition: 'none !important' }}
      />
    </Link>
  )
}

export default LinkIcon
