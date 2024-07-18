import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import ContactItem from './ContactItem'

const meta = {
  title: 'ViniciusCestarii/ContactItem',
  component: ContactItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactItem>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
