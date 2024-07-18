import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import ShareIcon from './ShareIcon'

const meta = {
  title: 'ViniciusCestarii/icons/ShareIcon',
  component: ShareIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShareIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
