import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import Logo from './Logo'

const meta = {
  title: 'ViniciusCestarii/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
