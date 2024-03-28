'use client'

import NavItem from '@/types/layout/NavItem'
import Box from '@mui/material/Box'
import * as React from 'react'
import AppBar from './AppBar'
import MobileDrawer from './MobileDrawer'

const navItems: NavItem[] = [
  {
    name: 'Home',
    elementId: 'home',
  },
  {
    name: 'Contact',
    elementId: 'contact',
  },
]

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <Box component="div" sx={{ mt: '80px' }}>
      <AppBar handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
      <MobileDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        navItems={navItems}
      />
    </Box>
  )
}

export default NavBar
