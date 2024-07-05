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
import { DictionaryProps } from '@/dictionaries/getDictionary'
import ChangeLanguage from './ChangeLanguage'

interface MobileDrawerProps extends DictionaryProps {
  mobileOpen: boolean
  handleDrawerToggle: () => void
  navItems: NavItem[]
}

const MobileDrawer = ({
  handleDrawerToggle,
  mobileOpen,
  navItems,
  dict,
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
          sx={{ py: 2, display: 'flex', justifyContent: 'center' }}
        >
          <Logo />
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ position: 'absolute', right: 42, top: 20 }}
          >
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '89.8vh',
          }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.elementId}
                onClick={() => {
                  scrollToElement(item.elementId)
                  handleDrawerToggle()
                }}
                disablePadding
              >
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText
                    sx={{ textTransform: 'capitalize' }}
                    primary={item.name}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <ChangeLanguage dict={dict} />
        </Box>
      </Drawer>
    </nav>
  )
}

export default MobileDrawer
