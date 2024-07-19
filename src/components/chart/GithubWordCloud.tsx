import { DictionaryProps } from '@/dictionaries/getDictionary'
interface GithubWordCloudProps extends DictionaryProps {
  data?: { name: string; value: number }[]
}

const GithubWordCloud = async ({ data, ...props }: GithubWordCloudProps) => {
  return null
}

export default GithubWordCloud
