import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import HomeIcon from './HomeIcon'

const meta = {
  title: 'ViniciusCestarii/icons/HomeIcon',
  component: HomeIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HomeIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
