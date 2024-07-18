import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import Subtitle from './Subtitle'
import en from '@/dictionaries/locales/en'

const meta = {
  title: 'ViniciusCestarii/Subtitle',
  component: Subtitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Subtitle>

export default meta
type Story = StoryObj<typeof meta>

const dict = en

export const Contact: Story = {
  args: {
    children: dict.section.contact.name,
  },
}

export const Projects: Story = {
  args: {
    children: dict.section.projects.name,
  },
}

export const Knowledge: Story = {
  args: {
    children: dict.section.knowledge.name,
  },
}
