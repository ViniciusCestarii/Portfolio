import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import ApiIcon from './ApiIcon'

const meta = {
  title: 'ViniciusCestarii/Icons/ApiIcon',
  component: ApiIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ApiIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
