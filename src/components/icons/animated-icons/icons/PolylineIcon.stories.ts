import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import PolylineIcon from './PolylineIcon'

const meta = {
  title: 'ViniciusCestarii/icons/PolylineIcon',
  component: PolylineIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PolylineIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
