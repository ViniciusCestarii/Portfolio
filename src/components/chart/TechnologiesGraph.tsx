'use client'
import React, { useEffect, useMemo, useRef } from 'react'
import * as echarts from 'echarts'
import { useMediaQuery, useTheme } from '@mui/material'
import hexToRgba from '@/utils/theme/hexToRgba'
import { DictionaryProps } from '@/dictionaries/getDictionary'

import langEN from 'echarts/i18n/langEN-obj.js'
import langPT from 'echarts/i18n/langPT-br-obj.js'

echarts.registerLocale('en', langEN)
echarts.registerLocale('pt', langPT)

const app =
  'path://M16.74 14.284L19.51 4 8 18.27h6.262l-3.502 9.317 12.666-13.303H16.74zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z'

const hearth =
  'path://M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 22.2577 17.5469 C 24.8124 17.5469 26.8046 19 27.9999 21.1797 C 29.1718 19 31.2109 17.5469 33.7187 17.5469 C 37.7733 17.5469 40.6796 20.5937 40.6796 24.8125 C 40.6796 31.0937 34.0468 36.8594 29.1718 39.9766 C 28.7968 40.2109 28.3514 40.5391 28.0468 40.5391 C 27.7421 40.5391 27.2265 40.2109 26.8280 39.9766 C 21.9530 36.8594 15.2968 31.0937 15.2968 24.8125 C 15.2968 20.5937 18.2265 17.5469 22.2577 17.5469 Z'

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
  { source: 'JavaScript', target: 'Bun' },
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
  { source: 'Typescript', target: 'Bun' },
  { source: 'Typescript', target: 'Express.js' },
  { source: 'Typescript', target: 'Fastify' },
  { source: 'Typescript', target: 'Prisma' },
  { source: 'Typescript', target: 'Drizzle' },
  { source: 'Go', target: 'Gorm' },
  { source: 'Go', target: 'Gin' },
  { source: 'Rust', target: 'Tauri' },
  { source: 'C#', target: '.NET Core' },
  { source: 'C#', target: 'Entity framework Core' },
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
  { source: 'Next.js Server Side', target: 'API' },
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
  { source: 'Bun', target: 'Vercel' },
  { source: 'Bun', target: 'AWS' },
  { source: 'Bun', target: 'API' },
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
  { source: '.NET Core', target: 'Vercel' },
  { source: '.NET Core', target: 'AWS' },
  { source: '.NET Core', target: 'API' },
  { source: 'Prisma', target: 'Express.js' },
  { source: 'Prisma', target: 'Fastify' },
  { source: 'Prisma', target: 'Nest.js' },
  { source: 'Drizzle', target: 'Express.js' },
  { source: 'Drizzle', target: 'Fastify' },
  { source: 'Drizzle', target: 'Nest.js' },
  { source: 'Prisma', target: 'Node.js' },
  { source: 'Drizzle', target: 'Node.js' },
  { source: 'Prisma', target: 'Bun' },
  { source: 'Drizzle', target: 'Bun' },
  { source: 'Gorm', target: 'Gin' },
  { source: 'Entity framework Core', target: '.NET Core' },
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
  { source: 'PostgreSQL', target: 'Entity framework Core' },
  { source: 'MySQL', target: 'AWS' },
  { source: 'MySQL', target: 'Prisma' },
  { source: 'MySQL', target: 'Drizzle' },
  { source: 'MySQL', target: 'Gorm' },
  { source: 'MySQL', target: 'Entity framework Core' },
  { source: 'Gitlab devOps', target: 'App' },
  { source: 'Github Actions', target: 'App' },
  { source: 'Docker', target: 'App' },
  { source: 'Docker', target: 'AWS' },
  { source: 'Web App', target: 'App' },
  { source: 'Mobile App', target: 'App' },
  { source: 'Desktop App', target: 'App' },
  { source: 'API', target: 'App' },
]

const TechnologiesGraph = ({ dict }: DictionaryProps) => {
  const { technoloiesGraph } = dict.section.knowledge
  const { technologyCategory } = technoloiesGraph

  const chartRef = useRef(null)
  const echartRef = useRef<echarts.ECharts>()
  const theme = useTheme()

  const isSmallScreen = useMediaQuery('(max-width:600px)')

  const data = useMemo(
    () => [
      {
        category: technologyCategory.markupLanguage,
        name: 'HTML',
        value: 1,
      },
      {
        category: technologyCategory.markupLanguage,
        name: 'Markdown',
        value: 1,
      },
      {
        category: technologyCategory.other,
        name: 'CSS',
        value: 1,
      },
      {
        category: technologyCategory.programmingLanguage,
        name: 'JavaScript',
        value: 1,
      },
      {
        category: technologyCategory.programmingLanguage,
        name: 'C#',
        value: 1,
      },
      {
        category: technologyCategory.programmingLanguage,
        name: 'Go',
        value: 1,
      },
      {
        category: technologyCategory.programmingLanguage,
        name: 'Rust',
        value: 1,
      },
      {
        category: technologyCategory.programmingLanguage,
        name: 'Typescript',
        symbol: hearth,
        value: 1,
      },
      {
        category: technologyCategory.library,
        name: 'React',
        symbol: hearth,
        value: 2,
      },
      {
        category: technologyCategory.library,
        name: 'NativeWind',
        value: 2,
      },
      {
        category: technologyCategory.framework,
        name: 'Expo',
        value: 3,
      },
      {
        category: technologyCategory.framework,
        name: 'React Native',
        value: 3,
      },
      {
        category: technologyCategory.library,
        name: 'Tailwind CSS',
        symbol: hearth,
        value: 2,
      },
      {
        category: technologyCategory.framework,
        name: 'Next.js Client Side',
        value: 3,
      },
      {
        category: technologyCategory.framework,
        name: 'Next.js Server Side',
        value: 3,
      },
      {
        category: technologyCategory.framework,
        name: 'Next.js',
        symbol: hearth,
        value: 4,
      },
      {
        category: technologyCategory.framework,
        name: 'Tauri',
        value: 3,
      },
      {
        category: technologyCategory.framework,
        name: '.NET Core',
        value: 3,
      },
      {
        category: technologyCategory.library,
        name: 'Prisma',
        symbol: hearth,
        value: 2,
      },
      {
        category: technologyCategory.library,
        name: 'Drizzle',
        symbol: hearth,
        value: 2,
      },
      {
        category: technologyCategory.library,
        name: 'Gorm',
        value: 2,
      },
      {
        category: technologyCategory.library,
        name: 'Entity framework Core',
        value: 2,
      },
      {
        category: technologyCategory.framework,
        name: 'Fastify',
        value: 3,
      },
      {
        category: technologyCategory.framework,
        name: 'Express.js',
        value: 3,
      },
      {
        category: technologyCategory.framework,
        name: 'Nest.js',
        value: 3,
      },
      {
        category: technologyCategory.framework,
        name: 'Gin',
        value: 3,
      },
      {
        category: technologyCategory.other,
        name: 'Node.js',
        symbol: hearth,
        value: 4,
      },
      {
        category: technologyCategory.other,
        name: 'Bun',
        symbol: hearth,
        value: 4,
      },
      {
        category: technologyCategory.database,
        name: 'MySQL',
        value: 2,
      },
      {
        category: technologyCategory.database,
        name: 'PostgreSQL',
        symbol: hearth,
        value: 2,
      },
      {
        category: technologyCategory.cloud,
        name: 'AWS',
        value: 3,
      },
      {
        category: technologyCategory.cloud,
        name: 'Vercel',
        symbol: hearth,
        value: 3,
      },
      {
        category: technologyCategory.devOps,
        name: 'Github Actions',
        symbol: hearth,
        value: 2,
      },
      {
        category: technologyCategory.devOps,
        name: 'Gitlab DevOps',
        value: 2,
      },
      {
        category: technologyCategory.devOps,
        name: 'Docker',
        symbol: hearth,
        value: 2,
      },
      {
        category: technologyCategory.app,
        name: 'App',
        value: 8,
        symbol: app,
      },
      {
        category: technologyCategory.app,
        name: 'Web App',
        value: 5,
      },
      {
        category: technologyCategory.app,
        name: 'Mobile App',
        value: 5,
      },
      {
        category: technologyCategory.app,
        name: 'Desktop App',
        value: 5,
      },
      {
        category: technologyCategory.app,
        name: 'API',
        value: 5,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const graph = useMemo(
    () => ({
      data: data.map((node) => ({
        ...node,
        symbolSize: isSmallScreen ? node.value * 3 : node.value * 8,
      })),
      categories: Object.values(technologyCategory),
      links,
    }),
    [technologyCategory, data, isSmallScreen],
  )

  const option: echarts.EChartsCoreOption = useMemo(
    () => ({
      tooltip: {
        formatter: '{b}',
      },
      aria: {
        show: true,
      },
      title: {
        text: technoloiesGraph.title,
        subtext: technoloiesGraph.description,
        top: 10,
        left: 10,
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      media: [
        {
          query: {
            maxWidth: 600,
          },
          option: {
            series: [
              {
                roam: false,
              },
            ],
            legend: {
              show: false,
            },
          },
        },
      ],
      series: [
        {
          ...graph,
          type: 'graph',
          layout: 'circular',
          roam: true,
          legendHoverLink: false,
          categories: graph.categories.map((category) => ({ name: category })),
          label: {
            show: true,
            formatter: '{b}',
          },
          zoom: 0.8,
          circular: {
            rotateLabel: true,
          },
          labelLayout: {
            hideOverlap: true,
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              width: 5,
            },
          },
          scaleLimit: {
            min: 0.6,
            max: 3,
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
          },
        },
      ],
      graphic: {
        elements: [
          {
            type: 'text',
            left: 10,
            bottom: 10,
            width: 100,
            cursor: 'default',
            style: {
              text: technoloiesGraph.belovedTechnologies,
              fill: '#EEE',
            },
          },
        ],
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [graph],
  )

  useEffect(() => {
    const myChart = echarts.init(chartRef.current, 'dark', {
      renderer: 'svg',
      locale: dict.lang,
    })

    myChart.setOption(option)

    echartRef.current = myChart

    return () => {
      myChart.dispose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!echartRef.current) return

    const primaryColor = hexToRgba(theme.palette.primary.main, 0.1)

    const newOption = { ...option, backgroundColor: primaryColor }
    echartRef.current.setOption(newOption)
  }, [theme, option])

  return (
    <div role="img" ref={chartRef} style={{ height: '600px', width: '100%' }} />
  )
}

export default TechnologiesGraph
