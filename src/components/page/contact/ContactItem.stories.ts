import type { Meta, StoryObj } from '@storybook/react'
import '@/app/globals.css'
import ContactItem from './ContactItem'

const meta = {
  title: 'ViniciusCestarii/ContactItem',
  component: ContactItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactItem>

export default meta
type Story = StoryObj<typeof meta>

export const Gmail: Story = {
  args: {
    link: 'mailto:viniciuscestari01@gmail.com',
    linkText: 'viniciuscestari01@gmail.com',
    icon: {
      alt: 'Email Icon',
      props: { color: 'white', icon: 'simple-icons:gmail' },
    },
    caption: 'Email:',
  },
}

export const Github: Story = {
  args: {
    link: 'https://github.com/ViniciusCestarii',
    linkText: 'ViniciusCestarii',
    icon: {
      alt: 'Github Icon',
      props: { color: 'white', icon: 'simple-icons:github' },
    },
    caption: 'Github:',
  },
}

export const LinkedIn: Story = {
  args: {
    link: 'https://www.linkedin.com/in/-vinicius-cestari/',
    linkText: 'in/-vinicius-cestari',
    icon: {
      alt: 'Linkedin Icon',
      props: { color: 'white', icon: 'simple-icons:linkedin' },
    },
    caption: 'Linkedin:',
  },
}
