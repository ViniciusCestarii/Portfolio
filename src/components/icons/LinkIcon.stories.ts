import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import LinkIcon from './LinkIcon'

const meta = {
  title: 'ViniciusCestarii/icons/LinkIcon',
  component: LinkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Github: Story = {
  args: {
    link: 'https://github.com/ViniciusCestarii',
    linkAriaLabel: 'GitHub Profile',
    icon: 'simple-icons:github',
    width: 20,
    height: 20,
  },
}

export const LinkedIn: Story = {
  args: {
    link: 'https://www.linkedin.com/in/-vinicius-cestari/',
    linkAriaLabel: 'LinkedIn Profile',
    icon: 'simple-icons:linkedin',
    width: 20,
    height: 20,
  },
}

export const Gmail: Story = {
  args: {
    link: 'mailto:viniciuscestari01@gmail.com',
    linkAriaLabel: 'Send me an email',
    icon: 'simple-icons:gmail',
    width: 20,
    height: 20,
  },
}
