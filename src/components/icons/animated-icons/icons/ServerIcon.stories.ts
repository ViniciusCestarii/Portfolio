import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import ServerIcon from './ServerIcon'

const meta = {
  title: 'ViniciusCestarii/icons/ServerIcon',
  component: ServerIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServerIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
