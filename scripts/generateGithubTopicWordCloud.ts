import { env } from '@/env'
import {
  RepositoryReturn,
  TopicReturn,
  Repository,
} from '@/types/api/githubProfileDate'
import fs from 'fs'
import path from 'path'

const wordCloudPath = path.join(__dirname, '../src/json/githubWordCloud.json')

const generateGithubTopicWordCloud = async () => {
  const repositories = await getRepositories()

  const topics = await Promise.all(
    repositories.map((repo) => getRepositoryTopics(repo.name)),
  )

  const repositoriesWithTopics = repositories.map((repo, index) => ({
    ...repo,
    topics: topics[index].names,
  }))

  const keywords = countGithubTopics(repositoriesWithTopics)

  const data = Object.keys(keywords).map((key) => ({
    name: key,
    value: keywords[key],
  }))

  const content = JSON.stringify(data, null, 2)

  fs.writeFile(wordCloudPath, content, (err) => {
    if (err) {
      console.error(`Error creating JSON file for GithubWordCloud:`, err)
    }
  })
}

const getRepositories = async (): Promise<RepositoryReturn[]> => {
  const allRepositories: RepositoryReturn[] = []
  let page = 1
  let hasMore = true

  while (hasMore) {
    const repositories = await fetchGitHub(
      `/users/${env.GITHUB_USERNAME}/repos?per_page=100&page=${page}`,
    )
    if (repositories.length > 0) {
      allRepositories.push(...repositories)
      page++
    } else {
      hasMore = false
    }
  }

  return allRepositories
}

const getRepositoryTopics = async (repo: string): Promise<TopicReturn> => {
  return fetchGitHub(`/repos/${env.GITHUB_USERNAME}/${repo}/topics`)
}

const countGithubTopics = (repositories: Repository[]) => {
  const topics = repositories.flatMap((repo) => repo.topics)

  return topics.reduce(
    (acc, topic) => {
      acc[topic] = (acc[topic] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )
}

const headers = {
  Authorization: `token ${env.GITHUB_TOKEN}`,
}

const fetchGitHub = async (endpoint: string) => {
  const response = await fetch(`${env.GITHUB_API_URL}${endpoint}`, {
    headers,
  })
  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.statusText}`)
  }
  return await response.json()
}

generateGithubTopicWordCloud()
