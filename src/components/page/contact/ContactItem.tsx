import { Box, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

interface ContactItemProps {
  imgSrc?: string
  imgAlt?: string
  link: string
  linkText: string
  caption: string
}

const ContactItem = ({
  link,
  caption,
  linkText,
  imgAlt,
  imgSrc,
}: ContactItemProps) => {
  const theme = useTheme()
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Typography
        variant="body1"
        color="textPrimary"
        sx={{ display: 'flex', gap: 1 }}
      >
        {imgAlt && imgSrc && (
          <Image
            alt={imgAlt}
            src={imgSrc}
            width={20}
            height={20}
            style={{
              filter: 'invert()',
            }}
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
