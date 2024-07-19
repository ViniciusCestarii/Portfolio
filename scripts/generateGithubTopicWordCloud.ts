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

  // fetch topics for each repository because getRepositories() doens't return all topics
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
  return fetchGitHub(`/users/${env.GITHUB_USERNAME}/repos?per_page=100`)
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
