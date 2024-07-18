import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import BalanceIcon from './BalanceIcon'

const meta = {
  title: 'ViniciusCestarii/icons/BalanceIcon',
  component: BalanceIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BalanceIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
