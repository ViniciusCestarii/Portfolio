'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import MobileDrawer from './MobileDrawer'
import NavItem from '@/types/layout/NavItem'
import AppBar from './AppBar'

interface Props {
  window?: () => Window
}

const navItems: NavItem[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
]

const NavBar = (props: Props) => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
      <MobileDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        window={window}
        navItems={navItems}
      />
    </Box>
  )
}

export default NavBar
