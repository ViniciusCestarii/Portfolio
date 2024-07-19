import { Box, Typography, useTheme } from '@mui/material'
import {
  Icon,
  IconProps as IconifyIconProps,
} from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

interface IconProps {
  alt: string
  props: IconifyIconProps
}

interface ContactItemProps {
  link: string
  linkText: string
  caption: string
  icon?: IconProps
}

const ContactItem = ({ link, caption, linkText, icon }: ContactItemProps) => {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Typography
        variant="body1"
        color="textPrimary"
        sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
      >
        {icon && (
          <Icon
            {...icon.props}
            role="img"
            aria-label={icon.alt}
            color={icon.props?.color ?? theme.palette.primary.light}
            style={{ transition: 'none !important' }}
          />
        )}
        {caption}
      </Typography>
      <Typography variant="body1">
        <Link
          target="_blank"
          href={link}
          style={{ color: theme.palette.primary.light }}
        >
          {linkText}
        </Link>
      </Typography>
    </Box>
  )
}

export default ContactItem
