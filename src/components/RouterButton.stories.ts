import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import RouterButton from './RouterButton'

const meta = {
  title: 'ViniciusCestarii/RouterButton',
  component: RouterButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RouterButton>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
