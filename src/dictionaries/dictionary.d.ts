import { AnimatedIconOnHoverProps } from '@/types/layout/AnimatedIcon'

/* eslint-disable no-use-before-define */
export type DictionaryType = {
  section: {
    home: {
      name: string
    }
    contact: {
      name: string
      greeting: string
      resume: {
        en: ResumeType
        pt: ResumeType
      }
    }
    projects: {
      name: string
      projectItens: ProjectItemProps[]
      knowMore: string
      openProject: string
      viewLiveApplication: string
      privateProject: string
      seeAllProjects: string
    }
    knowledge: {
      name: string
      technologyItens: TechnologyItemType[]
    }
  }
  hero: {
    fullStackDeveloper: string
  }
  color: {
    changeThemeColor: string
  }
}

export type ResumeType = {
  name: string
  href: string
}

export interface ProjectItemType {
  title: string
  description: string
  applicationLink?: string
  projectLink?: string
  privateProject?: boolean
  animatedIconProps: Omit<AnimatedIconOnHoverProps, 'colorize'> & {
    colorize?: string
  }
}

export interface TechnologyItemType {
  title: string
  description: string
  technologyLink: string
  iconName: string
}
