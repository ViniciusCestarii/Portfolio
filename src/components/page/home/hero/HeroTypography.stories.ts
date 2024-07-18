import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import HeroTypography from './HeroTypography'

const meta = {
  title: 'ViniciusCestarii/HeroTypography',
  component: HeroTypography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroTypography>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
