'use client'

import { Box } from '@mui/material'

interface PageContainerProps {
  children: React.ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Box
      sx={{
        maxWidth: '1080px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        px: { xs: 4, sm: 8 },
        gap: 4,
        overflow: { md: 'hidden', lg: 'visible' },
      }}
    >
      {children}
    </Box>
  )
}

export default PageContainer
