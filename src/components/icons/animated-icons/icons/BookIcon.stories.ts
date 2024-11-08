import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import BookIcon from './BookIcon'

const meta = {
  title: 'ViniciusCestarii/icons/BookIcon',
  component: BookIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BookIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
