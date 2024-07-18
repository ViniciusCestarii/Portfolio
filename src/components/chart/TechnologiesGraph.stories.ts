import type { Meta, StoryObj } from '@storybook/react'
import en from '@/dictionaries/locales/en'
import '@/app/globals.css'
import TechnologiesGraph from './TechnologiesGraph'

const meta = {
  title: 'ViniciusCestarii/TechnologiesGraph',
  component: TechnologiesGraph,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TechnologiesGraph>

export default meta
type Story = StoryObj<typeof meta>

const dict = en

export const Basic: Story = {
  args: {
    dict,
  } as any,
}
