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
      enableColorOnDark
      component="nav"
      color={scrollTrigger ? 'primary' : 'transparent'}
      elevation={scrollTrigger ? 4 : 0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        transition: 'background-color 0.5s ease-in-out',
        backdropFilter: scrollTrigger ? 'blur(10px) opacity(0.8)' : 'none',
      }}
    >
      <Toolbar
        color="primary"
        style={{
          paddingLeft: scrollTrigger ? 30 : 10,
          paddingRight: scrollTrigger ? 30 : 10,
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
          component="div"
          sx={{
            display: { sm: 'none' },
            position: 'absolute',
            px: '0.5rem',
          }}
        >
          <MenuButton handleDrawerToggle={handleDrawerToggle} />
        </Box>
        <Box
          component="div"
          sx={{
            display: { sm: 'none' },
            position: 'absolute',
            right: scrollTrigger ? 40 : 20,
            transition: 'right 500ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <ToggleColorButton />
        </Box>
        <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <Logo router />
        </Box>
        <Box
          component="div"
          sx={{ display: { xs: 'none', sm: 'flex' }, ml: 'auto' }}
          className="space-x-2"
        >
          {navItems.map((item) => (
            <RouterButton
              key={item.elementId}
              {...item}
              style={{ color: 'white' }}
            />
          ))}
          <ToggleColorButton />
        </Box>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
