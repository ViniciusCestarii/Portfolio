import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import CodeForkIcon from './CodeForkIcon'

const meta = {
  title: 'ViniciusCestarii/icons/CodeForkIcon',
  component: CodeForkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CodeForkIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
