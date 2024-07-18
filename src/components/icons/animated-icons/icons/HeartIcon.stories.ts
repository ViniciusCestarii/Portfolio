import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import HeartIcon from './HeartIcon'

const meta = {
  title: 'ViniciusCestarii/Icons/HeartIcon',
  component: HeartIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeartIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
