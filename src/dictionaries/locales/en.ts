import { DictionaryType } from '../dictionary'
import COINICON from '@/json/coin.json'
import CATICON from '@/json/cat.json'
import PUSHUPSICON from '@/json/pushups.json'
import BARCHART from '@/json/bar-chart.json'

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
    projects: {
      name: 'projects',
      projectItens: [
        {
          title: 'IBGE Data Charts',
          projectLink:
            'https://github.com/ViniciusCestarii/IBGE-data-charts?tab=readme-ov-file#ibge-data-charts-',
          applicationLink: 'https://ibge-data-charts.vercel.app/',
          animatedIconProps: {
            noIconHover: true,
            inAnimation: 'in-diversified',
            hoverAnimation: 'loop-all',
            jsonIcon: BARCHART,
            size: 150,
          },
          description:
            'IBGE Chart Data unleash the power of IBGE data through dynamic charts and visualizations. Explore economic trends, demographic shifts, and more across geographical levels. IBGE Chart Data makes complex data accessible and actionable for everyone.',
        },
        {
          title: 'Find A Friend',
          projectLink:
            'https://github.com/ViniciusCestarii/FindAFriendWeb?tab=readme-ov-file#find-a-friend-',
          animatedIconProps: {
            noIconHover: true,
            inAnimation: 'hover-pinch',
            hoverAnimation: 'hover-pinch',
            jsonIcon: CATICON,
            size: 158,
          },
          description:
            'FindAFriend connects you with adorable adoptable pets near you! Discover dogs, cats, rabbits, and more waiting for their forever homes. Animal shelters and rescue groups, post your precious animals and find loving families quickly and easily.',
        },
        {
          title: 'Futura Equipamentos Website',
          privateProject: true,
          animatedIconProps: {
            noIconHover: true,
            inAnimation: 'in-reveal',
            hoverAnimation: 'hover-spending',
            jsonIcon: COINICON,
            size: 142,
          },
          description:
            'Futura Equipamentos Website is a website for a company that sells and installs spring machines. Built with the latest technologies, it is a modern, fast, responsive, and SEO-friendly website.',
        },
        {
          title: 'Gym Pass',
          projectLink:
            'https://github.com/ViniciusCestarii/GymPassBack?tab=readme-ov-file#gym-pass-%EF%B8%8F',
          animatedIconProps: {
            noIconHover: true,
            inAnimation: 'hover-pinch',
            hoverAnimation: 'hover-pinch',
            jsonIcon: PUSHUPSICON,
            size: 144,
          },
          description:
            'Gym Pass help you check in seamlessly with a single tap on your phone. Explore a diverse network of gyms near you. Track your own progress.Gyms, can join the platform and tap into a stream of motivated members. all within the app.',
        },
      ],
      knowMore: 'know more',
      openProject: 'Open Project',
      privateProject: 'Private Project',
      seeAllProjects: 'See all projects',
      viewLiveApplication: 'View Live Application',
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
