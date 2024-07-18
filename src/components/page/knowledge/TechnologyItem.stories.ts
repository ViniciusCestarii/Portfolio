import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import TechnologyItem from './TechnologyItem'
import en from '@/dictionaries/locales/en'

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

const dict = en

export const Basic: Story = {
  args: {
    ...dict.section.knowledge.technologyItens[0],
  },
}
