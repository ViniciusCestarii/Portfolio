import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import TechnologyItem from './TechnologyItem'

const meta = {
  title: 'ViniciusCestarii/TechnologyItem',
  component: TechnologyItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TechnologyItem>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
