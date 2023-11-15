import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Logo from '../Logo'
import NavItem from '@/types/layout/NavItem'
import RouterButton from '@/components/RouterButton'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import ToggleColorButton from './ToggleColorButton'
import MenuButton from './MenuButton'

interface MobileDrawerProps {
  handleDrawerToggle: () => void
  navItems: NavItem[]
}

const AppBar = ({ handleDrawerToggle, navItems }: MobileDrawerProps) => {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <MuiAppBar
      component="nav"
      color={scrollTrigger ? 'primary' : 'transparent'}
      elevation={scrollTrigger ? 4 : 0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        transitionProperty: 'background-color, box-shadow',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '400ms',
      }}
    >
      <Toolbar
        color="primary"
        style={{
          paddingLeft: scrollTrigger ? 30 : 0,
          paddingRight: scrollTrigger ? 30 : 0,
        }}
        sx={{
          position: 'relative',
          py: 2,
          height: 80,
          maxWidth: '1280px',
          width: '100%',
          transition: 'padding 500ms cubic-bezier(0.4, 0, 0.2, 1)',
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
            right: scrollTrigger ? 30 : 0,
            transition: 'right 500ms cubic-bezier(0.4, 0, 0.2, 1)',
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
          <Logo black={!scrollTrigger} />
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
  )
}

export default AppBar
