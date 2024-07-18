import type { Meta, StoryObj } from '@storybook/react'
import en from '@/dictionaries/locales/en'
import '@/app/globals.css'
import ChangeLanguage from './ChangeLanguage'

const meta = {
  title: 'ViniciusCestarii/ChangeLanguage',
  component: ChangeLanguage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChangeLanguage>

export default meta
type Story = StoryObj<typeof meta>

const dict = en

export const Basic: Story = {
  args: {
    dict,
  } as any,
}
