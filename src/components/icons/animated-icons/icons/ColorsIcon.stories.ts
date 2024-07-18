import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import ColorsIcon from './ColorsIcon'

const meta = {
  title: 'ViniciusCestarii/icons/ColorsIcon',
  component: ColorsIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorsIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
