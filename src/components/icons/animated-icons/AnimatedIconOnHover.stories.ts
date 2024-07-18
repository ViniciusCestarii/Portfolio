import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import AnimatedIconOnHover from './AnimatedIconOnHover'

const meta = {
  title: 'ViniciusCestarii/icons/AnimatedIconOnHover',
  component: AnimatedIconOnHover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedIconOnHover>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
