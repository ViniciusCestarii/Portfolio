import { AnimatedIconOnHoverProps } from '@/types/layout/AnimatedIcon'

/* eslint-disable no-use-before-define */
export type DictionaryType = {
  lang: string
  changeLanguage: string
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
      projectItens: ProjectItemType[]
      knowMore: string
      openProject: string
      viewLiveApplication: string
      privateProject: string
      seeAllProjects: string
    }
    knowledge: {
      name: string
      technologyItens: TechnologyItemType[]
      proudlySelfHost: string
      showMore: string
      blogLink: {
        name: string
        link: string
      }
      technoloiesGraph: {
        title: string
        description: string
        belovedTechnologies: string
        technologyCategory: TechnologyCategoryType
      }
      githubWordCloud: {
        title: string
        description: string
        tooltipFormat: string
      }
    }
    footer: {
      allRightsReserved: string
      releasedUnderThe: string
      mitLicense: string
      iconsByLordicon: string
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

type TechnologyCategoryType = Record<
  | 'library'
  | 'framework'
  | 'markupLanguage'
  | 'programmingLanguage'
  | 'cloud'
  | 'devOps'
  | 'app'
  | 'database'
  | 'other',
  string
>
