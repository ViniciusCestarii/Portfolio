import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import SearchIcon from './SearchIcon'

const meta = {
  title: 'ViniciusCestarii/Icons/SearchIcon',
  component: SearchIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
