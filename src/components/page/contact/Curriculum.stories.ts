import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import Curriculum from './Curriculum'
import en from '@/dictionaries/locales/en'

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

const dict = en

export const EnCurriculum: Story = {
  args: {
    ...dict.section.contact.resume.en,
  },
}

export const PtCurriculum: Story = {
  args: {
    ...dict.section.contact.resume.pt,
  },
}
