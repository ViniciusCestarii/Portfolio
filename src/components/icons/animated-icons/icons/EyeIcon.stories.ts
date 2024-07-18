import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import EyeIcon from './EyeIcon'

const meta = {
  title: 'ViniciusCestarii/Icons/EyeIcon',
  component: EyeIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EyeIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
