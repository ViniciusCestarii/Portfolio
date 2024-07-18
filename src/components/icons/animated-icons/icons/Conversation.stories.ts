import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import Conversation from './Conversation'

const meta = {
  title: 'ViniciusCestarii/Icons/Conversation',
  component: Conversation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Conversation>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
