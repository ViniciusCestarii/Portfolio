/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

// Function to generate the content of the story file
const generateStoryContent = (componentName, storyDir) => `
import type { Meta, StoryObj } from '@storybook/react'
import en from '@/dictionaries/locales/en'
import '@/app/globals.css'
import ${componentName} from './${componentName}'

const meta = {
  title: 'ViniciusCestarii/${storyDir ?? ''}${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ${componentName}>

export default meta
type Story = StoryObj<typeof meta>

const dict = en

export const Basic: Story = {
  args: {
    dict,
  },
}
`

const checkForStoryDir = (filePath) => {
  if (filePath.includes('icons')) {
    return 'icons/'
  }
}

// Function to create the story file
const createStoryFile = (filePath) => {
  const dir = path.dirname(filePath)
  const componentName = path.basename(filePath, '.tsx')
  const storyFilePath = path.join(dir, `${componentName}.stories.ts`)

  const content = generateStoryContent(componentName, checkForStoryDir(dir))

  fs.writeFile(storyFilePath, content, (err) => {
    if (err) {
      console.error(`Error creating story for ${componentName}:`, err)
    } else {
      console.log(`Story for ${componentName} created successfully.`)
    }
  })
}

// Function to read files recursively
const readFilesRecursively = (dir) => {
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dir}:`, err)
      return
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file.name)

      if (file.isDirectory()) {
        readFilesRecursively(filePath)
      } else if (
        file.isFile() &&
        file.name.endsWith('.tsx') &&
        !file.name.includes('index')
      ) {
        createStoryFile(filePath)
      }
    })
  })
}

// Starting point - specify your project root directory
const projectRoot = path.join(__dirname, '../src/components')

readFilesRecursively(projectRoot)
