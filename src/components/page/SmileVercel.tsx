import { Typography, useTheme } from '@mui/material'
import { Box, Link } from 'mdi-material-ui'
import SmileIcon from '../icons/animated-icons/icons/Smile'

const SmileVercel = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        position: 'absolute',
        right: { xs: -64, md: -96 },
        top: '80%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <SmileIcon colorize={theme.palette.primary.dark} size={80} />
      <Typography
        variant="caption"
        color="textPrimary"
        sx={{ width: 80, textAlign: 'center' }}
      >
        Smile you are being watched by
        <Typography variant="caption" color="primary">
          <Link href="https://vercel.com/analytics"> Vercel Analytics</Link>
        </Typography>
      </Typography>
    </Box>
  )
}

export default SmileVercel
