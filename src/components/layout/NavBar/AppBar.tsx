import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Menu from 'mdi-material-ui/Menu'
import Logo from '../Logo'
import NavItem from '@/types/layout/NavItem'
import RouterButton from '@/components/RouterButton'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { ReactElement, cloneElement } from 'react'

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
  })
}

const AppBar = ({ handleDrawerToggle, navItems }: MobileDrawerProps) => {
  return (
    <ElevationScroll>
      <MuiAppBar component="nav">
        <Toolbar sx={{ position: 'relative', py: 2 }}>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, position: 'absolute' }}
          >
            <Menu />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Logo />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 'auto' }}>
            {navItems.map((item) => (
              <RouterButton
                key={item.url}
                name={item.name}
                url={item.url}
                contrastText
              />
            ))}
          </Box>
        </Toolbar>
      </MuiAppBar>
    </ElevationScroll>
  )
}

export default AppBar
