import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import ContactIcon from './ContactIcon'

const meta = {
  title: 'ViniciusCestarii/icons/ContactIcon',
  component: ContactIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
