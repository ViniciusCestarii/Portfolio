import { Typography, TypographyProps } from '@mui/material'

interface HeroTypographyProps extends TypographyProps {
  children: React.ReactNode
}

const HeroTypography = ({ children, ...props }: HeroTypographyProps) => {
  return (
    <Typography
      variant="h1"
      color="primary"
      {...props}
      sx={{
        position: 'relative',
        textAlign: 'center',
        fontSize: { xs: '72px', md: '92px', lg: '108px', xl: '124px' },
        '::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '22px',
          borderRadius: '100%',
          backgroundColor: 'primary.dark',
          filter: 'blur(50px) hue-rotate(10deg)',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          bottom: 0,
          transition: 'all 1s ease-in-out',
        },
        ...props.sx,
      }}
    >
      {children}
    </Typography>
  )
}

export default HeroTypography
