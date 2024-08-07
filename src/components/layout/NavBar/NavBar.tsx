'use client'

import NavItem from '@/types/layout/NavItem'
import Box from '@mui/material/Box'
import * as React from 'react'
import AppBar from './AppBar'
import MobileDrawer from './MobileDrawer'
import { DictionaryProps } from '@/dictionaries/getDictionary'

const NavBar = ({ dict }: DictionaryProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const navItems: NavItem[] = [
    {
      name: dict.section.home.name,
      elementId: 'home',
    },
    {
      name: dict.section.contact.name,
      elementId: 'contact',
    },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <Box component="div" sx={{ mt: '80px' }}>
      <AppBar
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
        dict={dict}
      />
      <MobileDrawer
        dict={dict}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        navItems={navItems}
      />
    </Box>
  )
}

export default NavBar
