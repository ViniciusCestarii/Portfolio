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
