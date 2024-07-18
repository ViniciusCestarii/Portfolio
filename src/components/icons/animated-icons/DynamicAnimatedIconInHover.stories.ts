import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import DynamicAnimatedIconInHover from './DynamicAnimatedIconInHover'

const meta = {
  title: 'ViniciusCestarii/Icons/DynamicAnimatedIconInHover',
  component: DynamicAnimatedIconInHover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DynamicAnimatedIconInHover>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
