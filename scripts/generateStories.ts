/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs'
import path from 'path'

const generateStoryContentWithDict = (
  componentName: string,
  storyDir?: string,
) =>
  `import type { Meta, StoryObj } from '@storybook/react'
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
  } as any,
}
`

const generateStoryContent = (componentName: string, storyDir?: string) =>
  `import type { Meta, StoryObj } from '@storybook/react'
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

export const Basic: Story = {
  args: {} as any,
}
`
const readFilesRecursively = (dir: string) => {
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
        doesntContainsNames(file)
      ) {
        createStoryFile(filePath)
      }
    })
  })
}

const componentsFolder = path.join(__dirname, '../src/components')

readFilesRecursively(componentsFolder)

const checkForStoryDir = (filePath: string) => {
  if (filePath.includes('icons')) {
    return 'icons/'
  }
}

const containsDictionaryProps = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  return fileContent.includes('DictionaryProps')
}

const doesntContainsNames = (file: fs.Dirent) => {
  const namesToExclude = ['index', 'Crisp', 'GithubWordCloudClient']

  return !namesToExclude.some((name) => file.name.includes(name))
}

const createStoryFile = (filePath: string) => {
  const dir = path.dirname(filePath)
  const componentName = path.basename(filePath, '.tsx')
  const storyFilePath = path.join(dir, `${componentName}.stories.ts`)

  if (fs.existsSync(storyFilePath)) {
    // console.log(
    //   `The story file for ${componentName} already exists at ${storyFilePath}`,
    // )

    return
  }

  const content = containsDictionaryProps(filePath)
    ? generateStoryContentWithDict(componentName, checkForStoryDir(dir))
    : generateStoryContent(componentName, checkForStoryDir(dir))

  fs.writeFile(storyFilePath, content, (err) => {
    if (err) {
      console.error(`Error creating story for ${componentName}:`, err)
    } else {
      console.log(`Story for ${componentName} created successfully.`)
    }
  })
}
