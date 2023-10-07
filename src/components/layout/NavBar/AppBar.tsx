import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Logo from '../Logo'
import NavItem from '@/types/layout/NavItem'
import RouterButton from '@/components/RouterButton'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { ReactElement, cloneElement } from 'react'
import ToggleColorButton from './ToggleColorButton'
import MenuButton from './MenuButton'

interface MobileDrawerProps {
  handleDrawerToggle: () => void
  navItems: NavItem[]
}

interface ElevationScrollProps {
  children: ReactElement
}

const ElevationScroll = ({ children }: ElevationScrollProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: !trigger && { opacity: 0.9 },
  })
}

const AppBar = ({ handleDrawerToggle, navItems }: MobileDrawerProps) => {
  return (
    <ElevationScroll>
      <MuiAppBar
        component="nav"
        sx={{
          display: 'flex',
          alignItems: 'center',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '400ms',
        }}
      >
        <Toolbar
          color="primary"
          sx={{
            position: 'relative',
            py: 2,
            height: 80,
            maxWidth: '1280px',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: { sm: 'none' },
              position: 'absolute',
            }}
          >
            <MenuButton handleDrawerToggle={handleDrawerToggle} />
          </Box>
          <Box
            sx={{
              display: { sm: 'none' },
              position: 'absolute',
              right: 0,
              transform: 'translate(-50%, -0%)',
            }}
          >
            <ToggleColorButton />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{ display: { xs: 'none', sm: 'block' }, ml: 'auto' }}
            className="space-x-2"
          >
            {navItems.map((item) => (
              <RouterButton
                key={item.url}
                name={item.name}
                url={item.url}
                contrastText
              />
            ))}
            <ToggleColorButton />
          </Box>
        </Toolbar>
      </MuiAppBar>
    </ElevationScroll>
  )
}

export default AppBar
