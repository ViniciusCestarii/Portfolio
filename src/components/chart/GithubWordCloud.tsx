import { getRepositories, getRepositoryTopics } from '@/api/githubFetch'
import { countGithubTopics } from '@/utils/github'
import dynamic from 'next/dynamic'

const GithubWordCloudClient = dynamic(
  () => import('@/components/chart/GithubWordCloudClient'),
  { ssr: false, loading: () => <div style={{ height: '600px' }} /> },
)

const GithubWordCloud = async () => {
  let repositoriesWithTopics
  try {
    const repositories = await getRepositories()

    // fetch topics for each repository because getRepositories() doens't return all topics
    const topics = await Promise.all(
      repositories.map((repo) => getRepositoryTopics(repo.name)),
    )
    repositoriesWithTopics = repositories.map((repo, index) => ({
      ...repo,
      topics: topics[index].names,
    }))
  } catch (error) {
    console.error(error)
    return null
  }
  const keywords = countGithubTopics(repositoriesWithTopics)

  const data = Object.keys(keywords).map((key) => ({
    name: key,
    value: keywords[key],
  }))

  return <GithubWordCloudClient data={data} />
}

export default GithubWordCloud
