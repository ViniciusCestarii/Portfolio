'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Close from 'mdi-material-ui/Close'
import Logo from '../Logo'
import NavItem from '@/types/layout/NavItem'
import { useRouter } from 'next/navigation'

interface MobileDrawerProps {
  mobileOpen: boolean
  handleDrawerToggle: () => void
  navItems: NavItem[]
}

const MobileDrawer = ({
  handleDrawerToggle,
  mobileOpen,
  navItems,
}: MobileDrawerProps) => {
  const router = useRouter()

  return (
    <nav>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(255,255,255,0.6)',
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
            <Logo />
            <IconButton sx={{ position: 'absolute', right: 6, top: 10 }}>
              <Close />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.url} disablePadding>
                <ListItemButton
                  sx={{ textAlign: 'center' }}
                  onClick={() => router.push(item.url)}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default MobileDrawer
