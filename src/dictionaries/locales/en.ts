import { DictionaryType } from '../dictionary'
import COINICON from '@/json/coin.json'
import CATICON from '@/json/cat.json'
import PUSHUPSICON from '@/json/pushups.json'
import BARCHART from '@/json/bar-chart.json'

const en: DictionaryType = {
  lang: 'en',
  changeLanguage: 'Change Language',
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
            inAnimation: 'loop-all',
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
            inAnimation: 'hover-spending',
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
    knowledge: {
      name: 'knowledge',
      smileWatchingBy: 'Smile you are being watched by',
      technologyItens: [
        {
          title: 'Next.js',
          description:
            'React framework for server-side rendering and static sites.',
          iconName: 'simple-icons:nextdotjs',
          technologyLink: 'https://nextjs.org/',
        },
        {
          title: 'React',
          description: 'JavaScript library for building user interfaces.',
          iconName: 'simple-icons:react',
          technologyLink: 'https://reactjs.org/',
        },
        {
          title: 'MUI',
          description: "React UI framework based on Google's Material Design.",
          iconName: 'simple-icons:mui',
          technologyLink: 'https://mui.com/',
        },
        {
          title: 'Tailwind CSS',
          description: 'Utility-first CSS framework for rapid development.',
          iconName: 'simple-icons:tailwindcss',
          technologyLink: 'https://tailwindcss.com/',
        },
        {
          title: 'TypeScript',
          description: 'Statically typed superset of JavaScript.',
          iconName: 'simple-icons:typescript',
          technologyLink: 'https://www.typescriptlang.org/',
        },
        {
          title: 'Express.js',
          description:
            'Minimal Node.js web framework for building web applications.',
          iconName: 'simple-icons:express',
          technologyLink: 'https://expressjs.com/',
        },
        {
          title: 'Fastify',
          description: 'Fast and low overhead web framework for Node.js.',
          iconName: 'simple-icons:fastify',
          technologyLink: 'https://www.fastify.io/',
        },
        {
          title: 'Prisma',
          description:
            'Open-source database toolkit for TypeScript and Node.js.',
          iconName: 'simple-icons:prisma',
          technologyLink: 'https://www.prisma.io/',
        },
        {
          title: 'Drizzle',
          description: 'Lightweight and performant TypeScript ORM',
          iconName: 'simple-icons:drizzle',
          technologyLink: 'https://orm.drizzle.team/',
        },
        {
          title: '.NET',
          description:
            'Cross-platform developer platform for building various applications.',
          iconName: 'simple-icons:dotnet',
          technologyLink: 'https://dotnet.microsoft.com/',
        },
        {
          title: 'C#',
          description:
            'Modern, object-oriented programming language developed by Microsoft.',
          iconName: 'simple-icons:csharp',
          technologyLink: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
        },
        {
          title: 'Docker',
          description:
            'Platform for developinga and shipping applications inside containers.',
          iconName: 'simple-icons:docker',
          technologyLink: 'https://www.docker.com/',
        },
        {
          title: 'PostgreSQL',
          description:
            'Powerful open-source relational database management system.',
          iconName: 'simple-icons:postgresql',
          technologyLink: 'https://www.postgresql.org/',
        },
        {
          title: 'Bun',
          description:
            'Toolkit specifically designed for JavaScript and TypeScript projects.',
          iconName: 'simple-icons:bun',
          technologyLink: 'https://bunjs.org/',
        },
        {
          title: 'Node.js',
          description:
            'Runtime environment for executing JavaScript code outside the browser.',
          iconName: 'simple-icons:nodedotjs',
          technologyLink: 'https://nodejs.org/',
        },
        {
          title: 'AWS',
          description:
            'Comprehensive cloud computing platform provided by Amazon.',
          iconName: 'simple-icons:amazonaws',
          technologyLink: 'https://aws.amazon.com/',
        },
        {
          title: 'Firebase',
          description:
            'App development platform with real-time database and hosting.',
          iconName: 'simple-icons:firebase',
          technologyLink: 'https://firebase.google.com/',
        },
        {
          title: 'Vercel',
          description:
            'Cloud platform for static sites and serverless functions deployment.',
          iconName: 'simple-icons:vercel',
          technologyLink: 'https://vercel.com/',
        },
        {
          title: 'Git',
          description:
            'Distributed version control system for tracking changes in source code.',
          iconName: 'simple-icons:git',
          technologyLink: 'https://git-scm.com/',
        },
        {
          title: 'GitHub',
          description: 'Web-based platform for version control using Git.',
          iconName: 'simple-icons:github',
          technologyLink: 'https://github.com/',
        },
        {
          title: 'GitLab',
          description:
            'Web-based DevOps lifecycle tool with Git repository management.',
          iconName: 'simple-icons:gitlab',
          technologyLink: 'https://about.gitlab.com/',
        },
      ],
      technoloiesGraph: {
        title: 'Technologies Graph',
        description: 'Technologies I used in projects (more to come 🚀)',
        belovedTechnologies: '❤ Beloved Technologies',
        technologyCategory: {
          app: 'App',
          cloud: 'Cloud',
          database: 'Database',
          devOps: 'DevOps',
          markupLanguage: 'Markup Language',
          framework: 'Framework',
          library: 'Library',
          programmingLanguage: 'Programming Language',
          other: 'Other',
        },
      },
      githubWordCloud: {
        title: 'Github Topics WordCloud',
        description: 'Topics I mentioned on my repositories.',
        tooltipFormat: 'Topic {b} mentioned {c} times',
      },
    },
    footer: {
      allRightsReserved: 'All rights reserved',
      releasedUnderThe: 'Released under the',
      mitLicense: 'MIT License',
      iconsByLordicon: 'Icons by Lordicon 👑',
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
