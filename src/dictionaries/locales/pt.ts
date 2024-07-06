import { DictionaryType } from '../dictionary'
import COINICON from '@/json/coin.json'
import CATICON from '@/json/cat.json'
import PUSHUPSICON from '@/json/pushups.json'
import BARCHART from '@/json/bar-chart.json'

const pt: DictionaryType = {
  lang: 'pt',
  changeLanguage: 'Mudar Idioma',
  section: {
    home: {
      name: 'início',
    },
    contact: {
      name: 'contato',
      greeting:
        'Olá, não hesite em entrar em contato! Estou sempre aberto a conectar-me com entusiastas, colaboradores ou qualquer pessoa que compartilhe uma paixão por tecnologia.',
      resume: {
        en: {
          href: 'https://drive.google.com/file/d/1vcZX5LxOHDkelsbvBp3eeDzx5Ljrb7DS/view?usp=drive_link',
          name: 'Currículo em Inglês',
        },
        pt: {
          href: 'https://drive.google.com/file/d/1JJ209MnxHEW_1jPS9ME3Z0LIQ0SknsYY/view?usp=drive_link',
          name: 'Currículo em Português',
        },
      },
    },
    projects: {
      name: 'projetos',
      projectItens: [
        {
          title: 'IBGE Data Charts',
          projectLink:
            'https://github.com/ViniciusCestarii/IBGE-data-charts?tab=readme-ov-file#ibge-data-charts-',
          applicationLink: 'https://ibge-data-charts.vercel.app/',
          animatedIconProps: {
            noIconHover: true,
            inAnimation: 'hover-diversified',
            hoverAnimation: 'loop-all',
            jsonIcon: BARCHART,
            size: 150,
          },
          description:
            'IBGE Data Charts libera o poder dos dados do IBGE por meio de gráficos dinâmicos e visualizações. Explore tendências econômicas, mudanças demográficas e muito mais em níveis geográficos. IBGE Data Charts torna dados complexos acessíveis e acionáveis para todos.',
        },
        {
          title: 'Find a Friend',
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
            'Find a Friend conecta você com animais adoráveis para adoção perto de você! Descubra cães, gatos, coelhos e mais esperando por seus lares. Abrigos de animais e grupos de resgate, podem publicar seus animais e econtrar famílias amorosas de forma rápida e fácil.',
        },
        {
          title: 'Site da Futura Equipamentos',
          privateProject: true,
          animatedIconProps: {
            noIconHover: true,
            inAnimation: 'hover-spending',
            hoverAnimation: 'hover-spending',
            jsonIcon: COINICON,
            size: 142,
          },
          description:
            'O site da Futura Equipamentos é um site para uma empresa que vende e instala máquinas de molas. Construído com as mais recentes tecnologias, é um site moderno, rápido, responsivo e amigável para SEO.',
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
            'Gym Pass ajuda você a fazer check-in facilmente com um único toque no seu telefone. Explore uma rede diversificada de academias perto de você. Acompanhe seu próprio progresso. Academias podem se juntar à plataforma e aproveitar um fluxo de membros motivados. Tudo dentro do app.',
        },
      ],
      knowMore: 'saiba mais',
      openProject: 'Abrir Projeto',
      privateProject: 'Projeto Privado',
      seeAllProjects: 'Ver todos os projetos',
      viewLiveApplication: 'Ver Aplicação ao Vivo',
    },
    knowledge: {
      name: 'conhecimento',
      smileWatchingBy: 'Sorria, você está sendo observado por',
      showMore: 'Mostrar Mais',
      technologyItens: [
        {
          title: 'Next.js',
          description:
            'Framework React para renderização no lado do servidor e sites estáticos.',
          iconName: 'simple-icons:nextdotjs',
          technologyLink: 'https://nextjs.org/',
        },
        {
          title: 'React',
          description:
            'Biblioteca JavaScript para construção de interfaces de usuário.',
          iconName: 'simple-icons:react',
          technologyLink: 'https://reactjs.org/',
        },
        {
          title: 'MUI',
          description:
            'Framework UI React baseado no Material Design do Google.',
          iconName: 'simple-icons:mui',
          technologyLink: 'https://mui.com/',
        },
        {
          title: 'Tailwind CSS',
          description: 'Framework CSS utilitário para desenvolvimento rápido.',
          iconName: 'simple-icons:tailwindcss',
          technologyLink: 'https://tailwindcss.com/',
        },
        {
          title: 'TypeScript',
          description: 'Superset estaticamente tipado de JavaScript.',
          iconName: 'simple-icons:typescript',
          technologyLink: 'https://www.typescriptlang.org/',
        },
        {
          title: 'Express.js',
          description: 'Framework web mínimo para Node.js.',
          iconName: 'simple-icons:express',
          technologyLink: 'https://expressjs.com/',
        },
        {
          title: 'Fastify',
          description:
            'Framework web rápido e com baixa sobrecarga para Node.js.',
          iconName: 'simple-icons:fastify',
          technologyLink: 'https://www.fastify.io/',
        },
        {
          title: 'Prisma',
          description:
            'Kit de ferramentas de banco de dados de código aberto para TypeScript e Node.js.',
          iconName: 'simple-icons:prisma',
          technologyLink: 'https://www.prisma.io/',
        },
        {
          title: 'Drizzle',
          description: 'ORM leve e performático para TypeScript',
          iconName: 'simple-icons:drizzle',
          technologyLink: 'https://orm.drizzle.team/',
        },
        {
          title: '.NET',
          description:
            'Plataforma de desenvolvimento multiplataforma para construir aplicações.',
          iconName: 'simple-icons:dotnet',
          technologyLink: 'https://dotnet.microsoft.com/',
        },
        {
          title: 'C#',
          description:
            'Linguagem de programação orientada a objetos desenvolvida pela Microsoft.',
          iconName: 'simple-icons:csharp',
          technologyLink: 'https://docs.microsoft.com/pt-br/dotnet/csharp/',
        },
        {
          title: 'Docker',
          description:
            'Plataforma para desenvolvimento e entrega de aplicações dentro de containers.',
          iconName: 'simple-icons:docker',
          technologyLink: 'https://www.docker.com/',
        },
        {
          title: 'PostgreSQL',
          description:
            'Sistema de gerenciamento de banco de dados relacional de código aberto.',
          iconName: 'simple-icons:postgresql',
          technologyLink: 'https://www.postgresql.org/',
        },
        {
          title: 'Bun',
          description:
            'Kit de ferramentas especificamente projetado para projetos JavaScript e TypeScript.',
          iconName: 'simple-icons:bun',
          technologyLink: 'https://bunjs.org/',
        },
        {
          title: 'Node.js',
          description:
            'Ambiente de execução para executar código JavaScript fora do navegador.',
          iconName: 'simple-icons:nodedotjs',
          technologyLink: 'https://nodejs.org/',
        },
        {
          title: 'AWS',
          description:
            'Plataforma abrangente de computação em nuvem fornecida pela Amazon.',
          iconName: 'simple-icons:amazonaws',
          technologyLink: 'https://aws.amazon.com/',
        },
        {
          title: 'Firebase',
          description:
            'Plataforma de desenvolvimento de aplicativos com banco de dados em tempo real e hospedagem.',
          iconName: 'simple-icons:firebase',
          technologyLink: 'https://firebase.google.com/',
        },
        {
          title: 'Vercel',
          description:
            'Plataforma de nuvem para implantação de sites estáticos e funções serverless.',
          iconName: 'simple-icons:vercel',
          technologyLink: 'https://vercel.com/',
        },
        {
          title: 'Git',
          description:
            'Sistema de controle de versão distribuído para rastreamento de mudanças no código-fonte.',
          iconName: 'simple-icons:git',
          technologyLink: 'https://git-scm.com/',
        },
        {
          title: 'GitHub',
          description:
            'Plataforma baseada na web para controle de versão usando Git.',
          iconName: 'simple-icons:github',
          technologyLink: 'https://github.com/',
        },
        {
          title: 'GitLab',
          description:
            'Ferramenta de ciclo de vida DevOps baseada na web com gerenciamento de repositório Git.',
          iconName: 'simple-icons:gitlab',
          technologyLink: 'https://about.gitlab.com/',
        },
      ],
      technoloiesGraph: {
        title: 'Gráfico de Tecnologias',
        description: 'Tecnologias que usei em projetos (mais por vir 🚀)',
        belovedTechnologies: '❤ Tecnologias Queridas',
        technologyCategory: {
          app: 'Aplicação',
          cloud: 'Nuvem',
          database: 'Banco de Dados',
          devOps: 'DevOps',
          markupLanguage: 'Linguagem de Marcação',
          framework: 'Framework',
          library: 'Biblioteca',
          programmingLanguage: 'Linguagem de Programação',
          other: 'Outros',
        },
      },
      githubWordCloud: {
        title: 'Wordcloud do GitHub',
        description: 'Tópicos que mencionei em meus repositórios.',
        tooltipFormat: 'Tópico {b} mencionado {c} vezes',
      },
    },
    footer: {
      allRightsReserved: 'Todos os direitos reservados',
      releasedUnderThe: 'Lançado sob a',
      mitLicense: 'Licença MIT',
      iconsByLordicon: 'Ícones por Lordicon 👑',
    },
  },
  hero: {
    fullStackDeveloper: 'Desenvolvedor Full Stack',
  },
  color: {
    changeThemeColor: 'Mudar para a próxima cor do tema',
  },
}

export default pt
