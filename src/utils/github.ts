import { Repository } from '@/types/api/githubProfileDate'

export const countGithubTopics = (repositories: Repository[]) => {
  const topics = repositories.flatMap((repo) => repo.topics)

  return topics.reduce(
    (acc, topic) => {
      acc[topic] = (acc[topic] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )
}
