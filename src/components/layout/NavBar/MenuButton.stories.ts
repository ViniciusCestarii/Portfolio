import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import MenuButton from './MenuButton'

const meta = {
  title: 'ViniciusCestarii/MenuButton',
  component: MenuButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MenuButton>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
