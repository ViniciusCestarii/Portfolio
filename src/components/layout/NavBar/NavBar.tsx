'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import MobileDrawer from './MobileDrawer'
import NavItem from '@/types/layout/NavItem'
import AppBar from './AppBar'

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

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <Box>
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
