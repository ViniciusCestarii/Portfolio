import type { Meta, StoryObj } from '@storybook/react'
import en from '@/dictionaries/locales/en'
import '@/app/globals.css'
import BlogSection from './BlogSection'

const meta = {
  title: 'ViniciusCestarii/BlogSection',
  component: BlogSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogSection>

export default meta
type Story = StoryObj<typeof meta>

const dict = en

export const Basic: Story = {
  args: {
    dict,
  } as any,
}
