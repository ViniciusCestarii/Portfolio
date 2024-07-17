import type { Meta, StoryObj } from '@storybook/react'
import ProjectItem from '@/components/page/projects/ProjectItem'
import en from '@/dictionaries/locales/en'
import '@/app/globals.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ViniciusCestarii/ProjectItem',
  component: ProjectItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ProjectItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const dict = en

const project = dict.section.projects.projectItens[0]

export const Basic: Story = {
  args: {
    ...project,
    animatedIconProps: {
      ...project.animatedIconProps,
    },
    dict,
  },
}

export const PrivateRepo: Story = {
  args: {
    ...project,
    privateProject: true,
    projectLink: undefined,
    animatedIconProps: {
      ...project.animatedIconProps,
    },
    dict,
  },
}
