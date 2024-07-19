import type { Meta, StoryObj } from '@storybook/react'
import en from '@/dictionaries/locales/en'
import '@/app/globals.css'
import wordCloudData from '@/json/githubWordCloud.json'
import GithubWordCloudClient from './GithubWordCloudClient'

const meta = {
  title: 'ViniciusCestarii/GithubWordCloud',
  component: GithubWordCloudClient,
  parameters: {
    layout: 'fullsscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GithubWordCloudClient>

export default meta
type Story = StoryObj<typeof meta>

const dict = en

export const Basic: Story = {
  args: {
    dict,
    data: wordCloudData,
  },
}

const customData = [
  {
    name: 'echarts',
    value: 2,
  },
  {
    name: 'echarts5',
    value: 1,
  },
  {
    name: 'nextjs',
    value: 6,
  },
  {
    name: 'react',
    value: 4,
  },
  {
    name: 'tailwindcss',
    value: 5,
  },
  {
    name: 'bun',
    value: 4,
  },
  {
    name: 'ffi',
    value: 1,
  },
  {
    name: 'rust',
    value: 1,
  },
  {
    name: 'ts',
    value: 1,
  },
  {
    name: 'nodejs',
    value: 4,
  },
  {
    name: 'solid',
    value: 2,
  },
  {
    name: 'typescript',
    value: 7,
  },
  {
    name: 'vitest',
    value: 1,
  },
  {
    name: 'docker',
    value: 4,
  },
  {
    name: 'testing',
    value: 1,
  },
  {
    name: 'best-practices',
    value: 2,
  },
  {
    name: 'api-rest',
    value: 2,
  },
  {
    name: 'automated-testing',
    value: 2,
  },
  {
    name: 'postgresql',
    value: 3,
  },
  {
    name: 'prisma',
    value: 3,
  },
  {
    name: 'axios',
    value: 4,
  },
  {
    name: 'reponsive',
    value: 2,
  },
  {
    name: 'mui',
    value: 2,
  },
  {
    name: 'tdd',
    value: 1,
  },
  {
    name: 'chartjs',
    value: 1,
  },
  {
    name: 'ibge-api',
    value: 1,
  },
  {
    name: 'statistics',
    value: 1,
  },
  {
    name: 'ascii-art',
    value: 1,
  },
  {
    name: 'css',
    value: 2,
  },
  {
    name: 'html',
    value: 2,
  },
  {
    name: 'image-transformation',
    value: 1,
  },
  {
    name: 'javascript',
    value: 4,
  },
  {
    name: 'p5js',
    value: 1,
  },
  {
    name: 'pixel-art',
    value: 1,
  },
  {
    name: 'leetcode',
    value: 1,
  },
  {
    name: 'oh-my-zsh-theme',
    value: 1,
  },
  {
    name: 'elixir',
    value: 1,
  },
  {
    name: 'fullstack',
    value: 1,
  },
  {
    name: 'phoenix',
    value: 1,
  },
  {
    name: 'reactjs',
    value: 2,
  },
  {
    name: 'ssr',
    value: 2,
  },
  {
    name: 'responsive',
    value: 1,
  },
  {
    name: 'storybook',
    value: 1,
  },
  {
    name: 'rinha-de-backend-2024-q1',
    value: 1,
  },
  {
    name: 'elysia',
    value: 1,
  },
  {
    name: 'docker-compose',
    value: 1,
  },
  {
    name: 'koa',
    value: 1,
  },
  {
    name: 'mongodb',
    value: 1,
  },
  {
    name: 'mongoose',
    value: 1,
  },
  {
    name: 'nginx',
    value: 1,
  },
  {
    name: 'expo',
    value: 1,
  },
  {
    name: 'mobile',
    value: 1,
  },
  {
    name: 'native-wind',
    value: 1,
  },
  {
    name: 'react-native',
    value: 1,
  },
  {
    name: 'fastify',
    value: 1,
  },
  {
    name: 'rest-api',
    value: 1,
  },
  {
    name: 'oauth',
    value: 1,
  },
  {
    name: 'csharp',
    value: 1,
  },
  {
    name: 'unity',
    value: 1,
  },
  {
    name: 'threefiber',
    value: 1,
  },
  {
    name: 'threejs',
    value: 1,
  },
  {
    name: 'automated',
    value: 1,
  },
  {
    name: 'github-workflows',
    value: 1,
  },
  {
    name: 'vscode',
    value: 1,
  },
  {
    name: 'vscode-settings',
    value: 1,
  },
  {
    name: 'privacy',
    value: 1,
  },
  {
    name: 'leaflet',
    value: 1,
  },
  {
    name: 'nextjs14',
    value: 1,
  },
]

export const CustomData: Story = {
  args: {
    dict,
    data: customData,
  },
}
