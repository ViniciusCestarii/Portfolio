import RouterButton from '@/components/RouterButton'
import NavItem from '@/types/layout/NavItem'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Logo from '../Logo'
import MenuButton from './MenuButton'
import ToggleColorButton from './ToggleColorButton'
import { DictionaryProps } from '@/dictionaries/getDictionary'
import ChangeLanguage from './ChangeLanguage'
import { Slide } from '@mui/material'

interface MobileDrawerProps extends DictionaryProps {
  handleDrawerToggle: () => void
  navItems: NavItem[]
}

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({
    threshold: 400,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  )
}

const AppBar = ({
  handleDrawerToggle,
  navItems,
  ...props
}: MobileDrawerProps) => {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <HideOnScroll>
      <MuiAppBar
        enableColorOnDark
        component="nav"
        color={scrollTrigger ? 'primary' : 'transparent'}
        elevation={scrollTrigger ? 4 : 0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          backdropFilter: scrollTrigger ? 'blur(10px) opacity(0.8)' : 'none',
          transition: `transform 0.1s ease-in-out, background-color 0.75s ease-in-out !important`,
          height: '100%',
          maxHeight: { xs: 80, md: 66 },
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
            maxWidth: '1280px',
            width: '100%',
            transition: 'padding 500ms cubic-bezier(0.4, 0, 0.2, 1) !important',
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
              transition: 'right 500ms cubic-bezier(0.4, 0, 0.2, 1) !important',
            }}
          >
            <ToggleColorButton {...props} />
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
            className="space-x-2 items-center max-h-full"
          >
            {navItems.map((item) => (
              <RouterButton
                key={item.elementId}
                {...item}
                style={{ color: 'white' }}
              />
            ))}
            <ToggleColorButton {...props} />
            <ChangeLanguage {...props} />
          </Box>
        </Toolbar>
      </MuiAppBar>
    </HideOnScroll>
  )
}

export default AppBar
