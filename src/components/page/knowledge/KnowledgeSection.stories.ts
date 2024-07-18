import type { Meta, StoryObj } from '@storybook/react'
import en from '@/dictionaries/locales/en'
import '@/app/globals.css'
import KnowledgeSection from './KnowledgeSection'

const meta = {
  title: 'ViniciusCestarii/Sections/KnowledgeSection',
  component: KnowledgeSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KnowledgeSection>

export default meta
type Story = StoryObj<typeof meta>

const dict = en

export const Basic: Story = {
  args: {
    dict,
  },
}
