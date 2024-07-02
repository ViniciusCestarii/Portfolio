import { DictionaryType } from '../dictionary'

const en: DictionaryType = {
  section: {
    home: {
      name: 'home',
    },
    contact: {
      name: 'contact',
      greeting:
        "Hey there, don't hesitate to reach out! I'm always open to connecting with fellow enthusiasts, collaborators, or anyone who shares a passion for technology.",
      resume: {
        en: {
          href: 'https://drive.google.com/file/d/1vcZX5LxOHDkelsbvBp3eeDzx5Ljrb7DS/view?usp=drive_link',
          name: 'English Resume',
        },
        pt: {
          href: 'https://drive.google.com/file/d/1JJ209MnxHEW_1jPS9ME3Z0LIQ0SknsYY/view?usp=drive_link',
          name: 'Portuguese Resume',
        },
      },
    },
  },
  hero: {
    fullStackDeveloper: 'Full Stack Developer',
  },
  color: {
    changeThemeColor: 'Change to next theme color',
  },
}

export default en
