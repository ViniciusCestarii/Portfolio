import { DictionaryType } from '../dictionary'
import COINICON from '@/json/coin.json'
import CATICON from '@/json/cat.json'
import PUSHUPSICON from '@/json/pushups.json'
import BARCHART from '@/json/bar-chart.json'

const es: DictionaryType = {
  lang: 'es',
  changeLanguage: 'Cambiar idioma',
  section: {
    home: {
      name: 'inicio',
    },
    contact: {
      name: 'contacto',
      greeting:
        '¡Hola! No dudes en ponerte en contacto conmigo. Siempre estoy abierto a conectarme con otros entusiastas, colaboradores o cualquier persona que comparta una pasión por la tecnología.',
      resume: {
        en: {
          href: 'https://drive.google.com/file/d/1vcZX5LxOHDkelsbvBp3eeDzx5Ljrb7DS/view?usp=drive_link',
          name: 'Currículum en inglés',
        },
        pt: {
          href: 'https://drive.google.com/file/d/1JJ209MnxHEW_1jPS9ME3Z0LIQ0SknsYY/view?usp=drive_link',
          name: 'Currículum en portugués',
        },
      },
    },
    projects: {
      name: 'proyectos',
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
            'IBGE Dados Web desata el poder de los datos del IBGE a través de gráficos y visualizaciones dinámicas. Explora tendencias económicas, cambios demográficos y más a través de niveles geográficos. IBGE Dados Web hace que los datos complejos sean accesibles y útiles para todos.',
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
            'FindAFriend te conecta con mascotas adoptables cerca de ti. Descubre perros, gatos, conejos y más esperando por sus hogares definitivos. Los refugios de animales y los grupos de rescate pueden publicar sus preciados animales y encontrar familias amorosas rápida y fácilmente.',
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
            'El sitio web de Molas Futura es un sitio para una empresa que vende resortes y alambres conformados. Construido con las últimas tecnologías, es un sitio web moderno, rápido, responsivo y amigable con el SEO.',
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
            'Gym Pass te ayuda a registrarte sin problemas con un solo toque en tu teléfono. Explora una diversa red de gimnasios cerca de ti. Sigue tu propio progreso. Los gimnasios pueden unirse a la plataforma y aprovechar un flujo constante de miembros motivados. Todo dentro de la aplicación.',
        },
      ],
      knowMore: 'saber más',
      openProject: 'Abrir Proyecto',
      privateProject: 'Proyecto Privado',
      seeAllProjects: 'Ver todos los proyectos',
      viewLiveApplication: 'Ver Aplicación en Vivo',
    },
    knowledge: {
      name: 'conocimiento',
      smileWatchingBy: 'Sonríe, estás siendo observado por',
      showMore: 'Mostrar más',
      blogLink: {
        name: 'Visita mi blog',
        link: 'https://vinicius-blog.vercel.app',
      },
      technologyItens: [
        {
          title: 'Next.js',
          description:
            'Framework de React para renderizado del lado del servidor y sitios estáticos.',
          iconName: 'simple-icons:nextdotjs',
          technologyLink: 'https://nextjs.org/',
        },
        {
          title: 'React',
          description:
            'Biblioteca de JavaScript para construir interfaces de usuario.',
          iconName: 'simple-icons:react',
          technologyLink: 'https://reactjs.org/',
        },
        {
          title: 'MUI',
          description:
            'Framework de UI para React basado en el Material Design de Google.',
          iconName: 'simple-icons:mui',
          technologyLink: 'https://mui.com/',
        },
        {
          title: 'Tailwind CSS',
          description:
            'Framework de CSS basado en utilidades para desarrollo rápido.',
          iconName: 'simple-icons:tailwindcss',
          technologyLink: 'https://tailwindcss.com/',
        },
        {
          title: 'TypeScript',
          description: 'Superconjunto tipado de JavaScript.',
          iconName: 'simple-icons:typescript',
          technologyLink: 'https://www.typescriptlang.org/',
        },
        {
          title: 'Express.js',
          description: 'Framework web minimalista para Node.js.',
          iconName: 'simple-icons:express',
          technologyLink: 'https://expressjs.com/',
        },
        {
          title: 'Fastify',
          description: 'Framework web rápido y de bajo overhead para Node.js.',
          iconName: 'simple-icons:fastify',
          technologyLink: 'https://www.fastify.io/',
        },
        {
          title: 'Prisma',
          description:
            'Herramienta de base de datos open-source para TypeScript y Node.js.',
          iconName: 'simple-icons:prisma',
          technologyLink: 'https://www.prisma.io/',
        },
        {
          title: 'Drizzle',
          description: 'ORM ligero y de alto rendimiento para TypeScript.',
          iconName: 'simple-icons:drizzle',
          technologyLink: 'https://orm.drizzle.team/',
        },
        {
          title: '.NET',
          description:
            'Plataforma de desarrollo multiplataforma para construir diversas aplicaciones.',
          iconName: 'simple-icons:dotnet',
          technologyLink: 'https://dotnet.microsoft.com/',
        },
        {
          title: 'C#',
          description:
            'Lenguaje de programación moderno, orientado a objetos, desarrollado por Microsoft.',
          iconName: 'simple-icons:csharp',
          technologyLink: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
        },
        {
          title: 'Docker',
          description:
            'Plataforma para desarrollar y distribuir aplicaciones dentro de contenedores.',
          iconName: 'simple-icons:docker',
          technologyLink: 'https://www.docker.com/',
        },
        {
          title: 'PostgreSQL',
          description:
            'Sistema de gestión de bases de datos relacional open-source potente.',
          iconName: 'simple-icons:postgresql',
          technologyLink: 'https://www.postgresql.org/',
        },
        {
          title: 'Bun',
          description:
            'Herramienta específicamente diseñada para proyectos JavaScript y TypeScript.',
          iconName: 'simple-icons:bun',
          technologyLink: 'https://bunjs.org/',
        },
        {
          title: 'Node.js',
          description:
            'Entorno de ejecución para ejecutar código JavaScript fuera del navegador.',
          iconName: 'simple-icons:nodedotjs',
          technologyLink: 'https://nodejs.org/',
        },
        {
          title: 'AWS',
          description:
            'Plataforma completa de computación en la nube proporcionada por Amazon.',
          iconName: 'simple-icons:amazonaws',
          technologyLink: 'https://aws.amazon.com/',
        },
        {
          title: 'Firebase',
          description:
            'Plataforma de desarrollo de aplicaciones con base de datos en tiempo real y hosting.',
          iconName: 'simple-icons:firebase',
          technologyLink: 'https://firebase.google.com/',
        },
        {
          title: 'Vercel',
          description:
            'Plataforma en la nube para el despliegue de sitios estáticos y funciones sin servidor.',
          iconName: 'simple-icons:vercel',
          technologyLink: 'https://vercel.com/',
        },
        {
          title: 'Git',
          description:
            'Sistema de control de versiones distribuido para el seguimiento de cambios en el código fuente.',
          iconName: 'simple-icons:git',
          technologyLink: 'https://git-scm.com/',
        },
        {
          title: 'GitHub',
          description:
            'Plataforma web para control de versiones utilizando Git.',
          iconName: 'simple-icons:github',
          technologyLink: 'https://github.com/',
        },
        {
          title: 'GitLab',
          description:
            'Herramienta DevOps basada en web con gestión de repositorios Git.',
          iconName: 'simple-icons:gitlab',
          technologyLink: 'https://about.gitlab.com/',
        },
      ],
      technoloiesGraph: {
        title: 'Gráfico de Tecnologías',
        description:
          'Tecnologías que he utilizado en proyectos (más por venir 🚀)',
        belovedTechnologies: '❤ Tecnologías preferidas',
        technologyCategory: {
          app: 'Aplicación',
          cloud: 'Nube',
          database: 'Base de datos',
          devOps: 'DevOps',
          markupLanguage: 'Lenguaje de marcado',
          framework: 'Framework',
          library: 'Biblioteca',
          programmingLanguage: 'Lenguaje de programación',
          other: 'Otro',
        },
      },
      githubWordCloud: {
        title: 'Nube de palabras de GitHub',
        description: 'Temas que he mencionado en mis repositorios.',
        tooltipFormat: 'Tema {b} mencionado {c} veces',
      },
    },
    footer: {
      allRightsReserved: 'Todos los derechos reservados',
      releasedUnderThe: 'Publicado bajo la',
      mitLicense: 'Licencia MIT',
      iconsByLordicon: 'Iconos por Lordicon 👑',
    },
  },
  hero: {
    fullStackDeveloper: 'Desarrollador Full Stack',
  },
  color: {
    changeThemeColor: 'Cambiar al siguiente color del tema',
  },
}

export default es
