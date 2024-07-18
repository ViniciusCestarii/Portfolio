import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import DocumentIcon from './DocumentIcon'

const meta = {
  title: 'ViniciusCestarii/icons/DocumentIcon',
  component: DocumentIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DocumentIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {} as any,
}
