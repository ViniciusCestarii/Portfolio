import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import LockIcon from './LockIcon'

const meta = {
  title: 'ViniciusCestarii/Icons/LockIcon',
  component: LockIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LockIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
