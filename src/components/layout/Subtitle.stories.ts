import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import Subtitle from './Subtitle'

const meta = {
  title: 'ViniciusCestarii/Subtitle',
  component: Subtitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Subtitle>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
