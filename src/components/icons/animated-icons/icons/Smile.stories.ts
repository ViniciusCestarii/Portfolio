import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import Smile from './Smile'

const meta = {
  title: 'ViniciusCestarii/Icons/Smile',
  component: Smile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Smile>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
