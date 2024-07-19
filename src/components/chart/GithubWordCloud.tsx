import { DictionaryProps } from '@/dictionaries/getDictionary'
import wordCloudData from '@/json/githubWordCloud.json'
import dynamic from 'next/dynamic'

const GithubWordCloudClient = dynamic(
  () => import('@/components/chart/GithubWordCloudClient'),
  { ssr: false, loading: () => <div style={{ height: '600px' }} /> },
)

interface GithubWordCloudProps extends DictionaryProps {
  data?: { name: string; value: number }[]
}

const GithubWordCloud = async ({ data, ...props }: GithubWordCloudProps) => {
  return <GithubWordCloudClient {...props} data={data ?? wordCloudData} />
}

export default GithubWordCloud
