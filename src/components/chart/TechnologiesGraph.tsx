'use client'
import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { useTheme } from '@mui/material'
import hexToRgba from '@/utils/theme/hexToRgba'

const app =
  'path://M16.74 14.284L19.51 4 8 18.27h6.262l-3.502 9.317 12.666-13.303H16.74zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z'

const hearth =
  'path://M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 22.2577 17.5469 C 24.8124 17.5469 26.8046 19 27.9999 21.1797 C 29.1718 19 31.2109 17.5469 33.7187 17.5469 C 37.7733 17.5469 40.6796 20.5937 40.6796 24.8125 C 40.6796 31.0937 34.0468 36.8594 29.1718 39.9766 C 28.7968 40.2109 28.3514 40.5391 28.0468 40.5391 C 27.7421 40.5391 27.2265 40.2109 26.8280 39.9766 C 21.9530 36.8594 15.2968 31.0937 15.2968 24.8125 C 15.2968 20.5937 18.2265 17.5469 22.2577 17.5469 Z'

enum TechnologyCategory {
  Library = 'Library',
  Framework = 'Framework',
  MarkupLanguage = 'Markup Language',
  ProgrammingLanguage = 'Programming Language',
  Cloud = 'Cloud',
  Database = 'Database',
  DevOps = 'DevOps',
  App = 'App',
  Other = 'Other',
}

const data = [
  {
    category: TechnologyCategory.MarkupLanguage,
    name: 'HTML',
    value: 1,
    x: -8,
    y: 28,
  },
  {
    category: TechnologyCategory.MarkupLanguage,
    name: 'Markdown',
    value: 1,
    x: -7.2,
    y: 26.4,
  },
  {
    category: TechnologyCategory.Other,
    name: 'CSS',
    value: 1,
    x: 1,
    y: 30,
  },
  {
    category: TechnologyCategory.ProgrammingLanguage,
    name: 'JavaScript',
    value: 1,
    x: 5,
    y: 28,
  },
  {
    category: TechnologyCategory.ProgrammingLanguage,
    name: 'Go',
    value: 1,
    x: 8,
    y: 26,
  },
  {
    category: TechnologyCategory.ProgrammingLanguage,
    name: 'Rust',
    value: 1,
    x: 7,
    y: 30,
  },
  {
    category: TechnologyCategory.ProgrammingLanguage,
    name: 'Typescript',
    symbol: hearth,
    value: 1,
    x: 3.2,
    y: 27,
  },
  {
    category: TechnologyCategory.Library,
    name: 'React',
    symbol: hearth,
    value: 2,
    x: -8,
    y: 20,
  },
  {
    category: TechnologyCategory.Library,
    name: 'NativeWind',
    value: 2,
    x: 9,
    y: -22,
  },
  {
    category: TechnologyCategory.Framework,
    name: 'Expo',
    value: 3,
    x: 12,
    y: -19,
  },
  {
    category: TechnologyCategory.Framework,
    name: 'React Native',
    value: 3,
    x: 10,
    y: -13,
  },
  {
    category: TechnologyCategory.Library,
    name: 'Tailwind CSS',
    symbol: hearth,
    value: 2,
    x: -7.7,
    y: 22,
  },
  {
    category: TechnologyCategory.Framework,
    name: 'Next.js Client Side',
    value: 3,
    x: 0,
    y: 17,
  },
  {
    category: TechnologyCategory.Framework,
    name: 'Next.js Server Side',
    value: 3,
    x: 4,
    y: 18.5,
  },
  {
    category: TechnologyCategory.Framework,
    name: 'Next.js',
    symbol: hearth,
    value: 4,
    x: 2,
    y: 14,
  },
  {
    category: TechnologyCategory.Framework,
    name: 'Tauri',
    value: 3,
    x: -16,
    y: -10,
  },
  {
    category: TechnologyCategory.Library,
    name: 'Prisma',
    symbol: hearth,
    value: 2,
    x: 30,
    y: 12,
  },
  {
    category: TechnologyCategory.Library,
    name: 'Drizzle',
    symbol: hearth,
    value: 2,
    x: 29,
    y: 15,
  },
  {
    category: TechnologyCategory.Library,
    name: 'Gorm',
    value: 2,
    x: 34,
    y: 11,
  },
  {
    category: TechnologyCategory.Framework,
    name: 'Fastify',
    value: 3,
    x: 21,
    y: 3,
  },
  {
    category: TechnologyCategory.Framework,
    name: 'Express.js',
    value: 3,
    x: 22,
    y: 9,
  },
  {
    category: TechnologyCategory.Framework,
    name: 'Nest.js',
    value: 3,
    x: 28,
    y: 1,
  },
  {
    category: TechnologyCategory.Framework,
    name: 'Gin',
    value: 3,
    x: 26,
    y: -4,
  },
  {
    category: TechnologyCategory.Other,
    name: 'Node.js',
    symbol: hearth,
    value: 4,
    x: 25,
    y: 5,
  },
  {
    category: TechnologyCategory.Database,
    name: 'MySQL',
    value: 2,
    x: 24,
    y: 22,
  },
  {
    category: TechnologyCategory.Database,
    name: 'PostgreSQL',
    symbol: hearth,
    value: 2,
    x: 22,
    y: 24,
  },
  {
    category: TechnologyCategory.Cloud,
    name: 'AWS',
    value: 3,
    x: 16,
    y: 10,
  },
  {
    category: TechnologyCategory.Cloud,
    name: 'Vercel',
    symbol: hearth,
    value: 3,
    x: 14,
    y: 15,
  },
  {
    category: TechnologyCategory.DevOps,
    name: 'Docker',
    symbol: hearth,
    value: 2,
    x: -9,
    y: 8,
  },
  {
    category: TechnologyCategory.App,
    name: 'App',
    value: 8,
    symbol: app,
    x: 0,
    y: 0,
  },
  {
    category: TechnologyCategory.App,
    name: 'Web App',
    value: 5,
    x: 0,
    y: 8,
  },
  {
    category: TechnologyCategory.App,
    name: 'Mobile App',
    value: 5,
    x: 7,
    y: -3,
  },
  {
    category: TechnologyCategory.App,
    name: 'Desktop App',
    value: 5,
    x: -7,
    y: -3,
  },
  {
    category: TechnologyCategory.App,
    name: 'API',
    value: 5,
    x: 7,
    y: 5,
  },
].map((node) => ({ ...node, symbolSize: node.value * 10 }))

const links = [
  { source: 'HTML', target: 'React' },
  { source: 'HTML', target: 'Tauri' },
  { source: 'CSS', target: 'React' },
  { source: 'CSS', target: 'Tauri' },
  { source: 'CSS', target: 'Tailwind CSS' },
  { source: 'JavaScript', target: 'React' },
  { source: 'JavaScript', target: 'React Native' },
  { source: 'JavaScript', target: 'Expo' },
  { source: 'JavaScript', target: 'Typescript' },
  { source: 'JavaScript', target: 'Next.js Client Side' },
  { source: 'JavaScript', target: 'Next.js Server Side' },
  { source: 'JavaScript', target: 'Nest.js' },
  { source: 'JavaScript', target: 'Node.js' },
  { source: 'JavaScript', target: 'Express.js' },
  { source: 'JavaScript', target: 'Fastify' },
  { source: 'JavaScript', target: 'Prisma' },
  { source: 'JavaScript', target: 'Drizzle' },
  { source: 'Typescript', target: 'React' },
  { source: 'Typescript', target: 'React Native' },
  { source: 'Typescript', target: 'Expo' },
  { source: 'Typescript', target: 'Next.js Client Side' },
  { source: 'Typescript', target: 'Next.js Server Side' },
  { source: 'Typescript', target: 'Nest.js' },
  { source: 'Typescript', target: 'Node.js' },
  { source: 'Typescript', target: 'Express.js' },
  { source: 'Typescript', target: 'Fastify' },
  { source: 'Typescript', target: 'Prisma' },
  { source: 'Typescript', target: 'Drizzle' },
  { source: 'Go', target: 'Gorm' },
  { source: 'Rust', target: 'Tauri' },
  { source: 'React', target: 'Next.js Client Side' },
  { source: 'React', target: 'Tauri' },
  { source: 'React Native', target: 'Mobile App' },
  { source: 'React Native', target: 'Desktop App' },
  { source: 'React Native', target: 'Web App' },
  { source: 'Expo', target: 'React Native' },
  { source: 'Tailwind CSS', target: 'React' },
  { source: 'Tailwind CSS', target: 'Next.js Client Side' },
  { source: 'NativeWind', target: 'React Native' },
  { source: 'Markdown', target: 'React' },
  { source: 'Markdown', target: 'Next.js Client Side' },
  { source: 'Markdown', target: 'Next.js Server Side' },
  { source: 'Next.js Client Side', target: 'Next.js' },
  { source: 'Next.js Server Side', target: 'Next.js' },
  { source: 'Next.js', target: 'Web App' },
  { source: 'Next.js', target: 'Tauri' },
  { source: 'Tauri', target: 'Desktop App' },
  { source: 'Node.js', target: 'Express.js' },
  { source: 'Node.js', target: 'Fastify' },
  { source: 'Node.js', target: 'Nest.js' },
  { source: 'Node.js', target: 'Vercel' },
  { source: 'Node.js', target: 'AWS' },
  { source: 'Node.js', target: 'API' },
  { source: 'Node.js', target: 'Tauri' },
  { source: 'Fastify', target: 'Vercel' },
  { source: 'Fastify', target: 'AWS' },
  { source: 'Fastify', target: 'API' },
  { source: 'Express.js', target: 'Vercel' },
  { source: 'Express.js', target: 'AWS' },
  { source: 'Express.js', target: 'API' },
  { source: 'Nest.js', target: 'Vercel' },
  { source: 'Nest.js', target: 'AWS' },
  { source: 'Nest.js', target: 'API' },
  { source: 'Gin', target: 'Vercel' },
  { source: 'Gin', target: 'AWS' },
  { source: 'Gin', target: 'API' },
  { source: 'Prisma', target: 'Express.js' },
  { source: 'Prisma', target: 'Fastify' },
  { source: 'Prisma', target: 'Nest.js' },
  { source: 'Drizzle', target: 'Express.js' },
  { source: 'Drizzle', target: 'Fastify' },
  { source: 'Drizzle', target: 'Nest.js' },
  { source: 'Prisma', target: 'Node.js' },
  { source: 'Drizzle', target: 'Node.js' },
  { source: 'Gorm', target: 'Gin' },
  { source: 'Vercel', target: 'Next.js' },
  { source: 'Vercel', target: 'API' },
  { source: 'AWS', target: 'Web App' },
  { source: 'AWS', target: 'Vercel' },
  { source: 'AWS', target: 'API' },
  { source: 'PostgreSQL', target: 'AWS' },
  { source: 'PostgreSQL', target: 'Vercel' },
  { source: 'PostgreSQL', target: 'Prisma' },
  { source: 'PostgreSQL', target: 'Drizzle' },
  { source: 'PostgreSQL', target: 'Gorm' },
  { source: 'MySQL', target: 'AWS' },
  { source: 'MySQL', target: 'Prisma' },
  { source: 'MySQL', target: 'Drizzle' },
  { source: 'MySQL', target: 'Gorm' },
  { source: 'Docker', target: 'App' },
  { source: 'Docker', target: 'AWS' },
  { source: 'Web App', target: 'App' },
  { source: 'Mobile App', target: 'App' },
  { source: 'Desktop App', target: 'App' },
  { source: 'API', target: 'App' },
]

const graph = {
  data,
  categories: Object.values(TechnologyCategory),
  links,
}

const option: echarts.EChartsCoreOption = {
  tooltip: {
    formatter: '{b}',
  },
  aria: {
    show: true, // auto generate aria description
  },
  title: {
    text: 'Technologies Graph',
    subtext: 'Technologies I used in projects (more to come 🚀)',
    top: 10,
    left: 10,
  },
  legend: {
    orient: 'vertical',
    right: 10,
    top: 'center',
  },
  media: [
    {
      query: {
        maxWidth: 600,
      },
      option: {
        legend: {
          show: false,
        },
      },
    },
  ],
  series: [
    {
      ...graph,
      name: 'Tecnologia',
      type: 'graph',
      data,
      roam: true,
      categories: graph.categories.map((category) => ({ name: category })),
      label: {
        show: true,
        position: 'right',
        formatter: '{b}',
      },
      labelLayout: {
        hideOverlap: true,
      },
      scaleLimit: {
        min: 0.4,
        max: 2,
      },
      lineStyle: {
        color: 'source',
        curveness: 0.3,
      },
    },
  ],
}

const TechnologiesGraph = () => {
  const chartRef = useRef(null)
  const echartRef = useRef<echarts.ECharts>()
  const theme = useTheme()

  useEffect(() => {
    const myChart = echarts.init(chartRef.current, 'dark')

    myChart.setOption(option)

    echartRef.current = myChart

    return () => {
      myChart.dispose()
    }
  }, [])

  useEffect(() => {
    if (!echartRef.current) return

    const primaryColor = hexToRgba(theme.palette.primary.main, 0.1)

    const newOption = { ...option, backgroundColor: primaryColor }
    echartRef.current.setOption(newOption)
  }, [theme])

  return <div ref={chartRef} style={{ height: '600px', width: '100%' }} />
}

export default TechnologiesGraph
