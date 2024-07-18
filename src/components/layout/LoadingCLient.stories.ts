import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import LoadingCLient from './LoadingCLient'

const meta = {
  title: 'ViniciusCestarii/LoadingCLient',
  component: LoadingCLient,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingCLient>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
