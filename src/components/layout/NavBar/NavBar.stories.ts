import type { Meta, StoryObj } from '@storybook/react'
import en from '@/dictionaries/locales/en'
import '@/app/globals.css'
import NavBar from './NavBar'

const meta = {
  title: 'ViniciusCestarii/NavBar',
  component: NavBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>

const dict = en

export const Basic: Story = {
  args: {
    dict,
  } as any,
}
