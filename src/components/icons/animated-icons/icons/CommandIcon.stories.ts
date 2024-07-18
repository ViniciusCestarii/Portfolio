import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import CommandIcon from './CommandIcon'

const meta = {
  title: 'ViniciusCestarii/icons/CommandIcon',
  component: CommandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommandIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
