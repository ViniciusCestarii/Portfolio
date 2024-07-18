import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import PageContainer from './PageContainer'

const meta = {
  title: 'ViniciusCestarii/PageContainer',
  component: PageContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
