import { Box, Typography } from '@mui/material'
import Link from 'next/link'

const Footer = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant="overline" color="textPrimary">
        <Link href="https://lordicon.com/" target="_blank">
          Icons by Lordicon.com 👑
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer
