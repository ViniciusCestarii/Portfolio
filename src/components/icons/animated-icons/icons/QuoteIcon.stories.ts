import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import QuoteIcon from './QuoteIcon'

const meta = {
  title: 'ViniciusCestarii/icons/QuoteIcon',
  component: QuoteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuoteIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
