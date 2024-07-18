import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import Curriculum from './Curriculum'

const meta = {
  title: 'ViniciusCestarii/Curriculum',
  component: Curriculum,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Curriculum>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
