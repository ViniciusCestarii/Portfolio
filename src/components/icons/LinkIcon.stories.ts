import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import LinkIcon from './LinkIcon'

const meta = {
  title: 'ViniciusCestarii/icons/LinkIcon',
  component: LinkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
