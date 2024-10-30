import { DictionaryType } from '../dictionary'
import COINICON from '@/json/coin.json'
import CATICON from '@/json/cat.json'
import PUSHUPSICON from '@/json/pushups.json'
import BARCHART from '@/json/bar-chart.json'

const fr: DictionaryType = {
  lang: 'fr',
  changeLanguage: 'Changer de langue',
  section: {
    home: {
      name: 'accueil',
    },
    contact: {
      name: 'contact',
      greeting:
        "Bonjour, n'hésitez pas à me contacter ! Je suis toujours ouvert à la rencontre avec des passionnés, des collaborateurs ou toute personne partageant une passion pour la technologie.",
      resume: {
        en: {
          href: 'https://drive.google.com/file/d/1vcZX5LxOHDkelsbvBp3eeDzx5Ljrb7DS/view?usp=drive_link',
          name: 'CV en anglais',
        },
        pt: {
          href: 'https://drive.google.com/file/d/1JJ209MnxHEW_1jPS9ME3Z0LIQ0SknsYY/view?usp=drive_link',
          name: 'CV en portugais',
        },
      },
    },
    projects: {
      name: 'projets',
      projectItens: [
        {
          title: 'IBGE Dados Web',
          projectLink: 'https://github.com/ViniciusCestarii/ibge-dados-web',
          applicationLink: 'https://ibge-dados-web.vercel.app/',
          animatedIconProps: {
            noIconHover: true,
            inAnimation: 'loop-all',
            hoverAnimation: 'loop-all',
            jsonIcon: BARCHART,
            size: 150,
          },
          description:
            "IBGE Dados Web libère le pouvoir des données de l'IBGE grâce à des graphiques et des visualisations dynamiques. Explorez les tendances économiques, les changements démographiques, et plus encore à travers différents niveaux géographiques. IBGE Dados Web rend les données complexes accessibles et exploitables pour tous.",
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
            'FindAFriend vous connecte avec des animaux adoptables près de chez vous ! Découvrez des chiens, des chats, des lapins et plus encore qui attendent leur foyer pour toujours. Les refuges pour animaux et les groupes de sauvetage peuvent publier leurs précieux animaux et trouver rapidement et facilement des familles aimantes.',
        },
        {
          title: 'Molas Futura Website',
          privateProject: true,
          applicationLink: 'https://www.molasfutura.com.br',
          animatedIconProps: {
            noIconHover: true,
            inAnimation: 'hover-spending',
            hoverAnimation: 'hover-spending',
            jsonIcon: COINICON,
            size: 142,
          },
          description:
            "Le site Web de Molas Futura est un site pour une entreprise qui vend des ressorts et des fils formés. Construit avec les dernières technologies, c'est un site Web moderne, rapide, réactif et convivial pour le référencement.",
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
            "Gym Pass vous aide à vous enregistrer facilement d'un simple tapotement sur votre téléphone. Explorez un réseau diversifié de salles de sport près de chez vous. Suivez vos propres progrès. Les salles de sport peuvent rejoindre la plateforme et accéder à un flux de membres motivés. Tout cela dans l'application.",
        },
      ],
      knowMore: 'en savoir plus',
      openProject: 'Ouvrir le projet',
      privateProject: 'Projet privé',
      seeAllProjects: 'Voir tous les projets',
      viewLiveApplication: "Voir l'application en direct",
    },
    knowledge: {
      name: 'connaissance',
      smileWatchingBy: 'Souriez, vous êtes observé par',
      showMore: 'Afficher plus',
      technologyItens: [
        {
          title: 'Next.js',
          description:
            'Framework React pour le rendu côté serveur et les sites statiques.',
          iconName: 'simple-icons:nextdotjs',
          technologyLink: 'https://nextjs.org/',
        },
        {
          title: 'React',
          description:
            'Bibliothèque JavaScript pour construire des interfaces utilisateur.',
          iconName: 'simple-icons:react',
          technologyLink: 'https://reactjs.org/',
        },
        {
          title: 'MUI',
          description:
            'Framework UI pour React basé sur le Material Design de Google.',
          iconName: 'simple-icons:mui',
          technologyLink: 'https://mui.com/',
        },
        {
          title: 'Tailwind CSS',
          description:
            'Framework CSS utilitaire-first pour un développement rapide.',
          iconName: 'simple-icons:tailwindcss',
          technologyLink: 'https://tailwindcss.com/',
        },
        {
          title: 'TypeScript',
          description: 'Surensemble typé de JavaScript.',
          iconName: 'simple-icons:typescript',
          technologyLink: 'https://www.typescriptlang.org/',
        },
        {
          title: 'Express.js',
          description: 'Framework web minimal pour Node.js.',
          iconName: 'simple-icons:express',
          technologyLink: 'https://expressjs.com/',
        },
        {
          title: 'Fastify',
          description:
            'Framework web rapide et à faible overhead pour Node.js.',
          iconName: 'simple-icons:fastify',
          technologyLink: 'https://www.fastify.io/',
        },
        {
          title: 'Prisma',
          description:
            'Outil open-source pour les bases de données pour TypeScript et Node.js.',
          iconName: 'simple-icons:prisma',
          technologyLink: 'https://www.prisma.io/',
        },
        {
          title: 'Drizzle',
          description: 'ORM TypeScript léger et performant.',
          iconName: 'simple-icons:drizzle',
          technologyLink: 'https://orm.drizzle.team/',
        },
        {
          title: '.NET',
          description:
            'Plateforme de développement multiplateforme pour construire diverses applications.',
          iconName: 'simple-icons:dotnet',
          technologyLink: 'https://dotnet.microsoft.com/',
        },
        {
          title: 'C#',
          description:
            'Langage de programmation moderne, orienté objet, développé par Microsoft.',
          iconName: 'simple-icons:csharp',
          technologyLink: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
        },
        {
          title: 'Docker',
          description:
            'Plateforme pour développer et expédier des applications dans des conteneurs.',
          iconName: 'simple-icons:docker',
          technologyLink: 'https://www.docker.com/',
        },
        {
          title: 'PostgreSQL',
          description:
            'Système de gestion de base de données relationnelle open-source puissant.',
          iconName: 'simple-icons:postgresql',
          technologyLink: 'https://www.postgresql.org/',
        },
        {
          title: 'Bun',
          description:
            'Boîte à outils spécifiquement conçue pour les projets JavaScript et TypeScript.',
          iconName: 'simple-icons:bun',
          technologyLink: 'https://bunjs.org/',
        },
        {
          title: 'Node.js',
          description:
            "Environnement d'exécution pour exécuter du code JavaScript en dehors du navigateur.",
          iconName: 'simple-icons:nodedotjs',
          technologyLink: 'https://nodejs.org/',
        },
        {
          title: 'AWS',
          description:
            'Plateforme de cloud computing complète fournie par Amazon.',
          iconName: 'simple-icons:amazonaws',
          technologyLink: 'https://aws.amazon.com/',
        },
        {
          title: 'Firebase',
          description:
            "Plateforme de développement d'applications avec base de données en temps réel et hébergement.",
          iconName: 'simple-icons:firebase',
          technologyLink: 'https://firebase.google.com/',
        },
        {
          title: 'Vercel',
          description:
            'Plateforme cloud pour le déploiement de sites statiques et de fonctions sans serveur.',
          iconName: 'simple-icons:vercel',
          technologyLink: 'https://vercel.com/',
        },
        {
          title: 'Git',
          description:
            'Système de contrôle de version distribué pour suivre les modifications du code source.',
          iconName: 'simple-icons:git',
          technologyLink: 'https://git-scm.com/',
        },
        {
          title: 'GitHub',
          description:
            'Plateforme web pour le contrôle de version utilisant Git.',
          iconName: 'simple-icons:github',
          technologyLink: 'https://github.com/',
        },
        {
          title: 'GitLab',
          description:
            'Outil DevOps basé sur le web avec gestion de référentiel Git.',
          iconName: 'simple-icons:gitlab',
          technologyLink: 'https://about.gitlab.com/',
        },
      ],
      technoloiesGraph: {
        title: 'Graphique des technologies',
        description:
          "Technologies que j'ai utilisées dans les projets (plus à venir 🚀)",
        belovedTechnologies: '❤ Technologies préférées',
        technologyCategory: {
          app: 'Application',
          cloud: 'Cloud',
          database: 'Base de données',
          devOps: 'DevOps',
          markupLanguage: 'Langage de balisage',
          framework: 'Framework',
          library: 'Bibliothèque',
          programmingLanguage: 'Langage de programmation',
          other: 'Autre',
        },
      },
      githubWordCloud: {
        title: 'Nuage de mots des sujets GitHub',
        description: "Sujets que j'ai mentionnés dans mes dépôts.",
        tooltipFormat: 'Sujet {b} mentionné {c} fois',
      },
    },
    footer: {
      allRightsReserved: 'Tous droits réservés',
      releasedUnderThe: 'Publié sous la',
      mitLicense: 'Licence MIT',
      iconsByLordicon: 'Icônes par Lordicon 👑',
    },
  },
  hero: {
    fullStackDeveloper: 'Développeur Full Stack',
  },
  color: {
    changeThemeColor: 'Changer pour la couleur de thème suivante',
  },
}

export default fr
