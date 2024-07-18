import type { Meta, StoryObj } from '@storybook/react'
import en from '@/dictionaries/locales/en'
import '@/app/globals.css'
import AppBar from './AppBar'
import NavItem from '@/types/layout/NavItem'

const meta = {
  title: 'ViniciusCestarii/AppBar',
  component: AppBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppBar>

export default meta
type Story = StoryObj<typeof meta>

const dict = en

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

export const Basic: Story = {
  args: {
    dict,
    navItems,
    handleDrawerToggle: () => {
      console.log('handleDrawerToggle')
    },
  },
}
