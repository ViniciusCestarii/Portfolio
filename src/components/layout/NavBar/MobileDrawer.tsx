'use client'

import NavItem from '@/types/layout/NavItem'
import { scrollToElement } from '@/utils/router/router'
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
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
        }}
      >
        <Box
          component="div"
          onClick={handleDrawerToggle}
          sx={{ textAlign: 'center' }}
        >
          <Box
            component="div"
            sx={{ py: 2, display: 'flex', justifyContent: 'center' }}
          >
            <Logo />
            <IconButton sx={{ position: 'absolute', right: 40, top: 20 }}>
              <Close />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.elementId}
                onClick={() => scrollToElement(item.elementId)}
                disablePadding
              >
                <ListItemButton sx={{ textAlign: 'center' }}>
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
