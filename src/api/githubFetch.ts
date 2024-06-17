import { env } from '@/env'
import { RepositoryReturn, TopicReturn } from '@/types/api/githubProfileDate'

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

export const getRepositories = async (): Promise<RepositoryReturn[]> => {
  return fetchGitHub(`/users/${env.GITHUB_USERNAME}/repos?per_page=100`)
}

export const getRepositoryTopics = async (
  repo: string,
): Promise<TopicReturn> => {
  return fetchGitHub(`/repos/${env.GITHUB_USERNAME}/${repo}/topics`)
}
