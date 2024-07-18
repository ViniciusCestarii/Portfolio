import type { Meta, StoryObj } from '@storybook/react'
import en from '@/dictionaries/locales/en'
import '@/app/globals.css'
import FloatingIcons from './FloatingIcons'

const meta = {
  title: 'ViniciusCestarii/FloatingIcons',
  component: FloatingIcons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FloatingIcons>

export default meta
type Story = StoryObj<typeof meta>

const dict = en

export const Basic: Story = {
  args: {
    dict,
  } as any,
}
