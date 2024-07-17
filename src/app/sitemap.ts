import { locales } from '@/dictionaries/getDictionary'
import { env } from '@/env'
import { MetadataRoute } from 'next'

type PageMap = {
  url: string
  lastModified?: string | Date
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: number
}

const addLanguage = (pageMap: PageMap): MetadataRoute.Sitemap => {
  const urlMap: MetadataRoute.Sitemap = [pageMap]

  urlMap.push(
    ...locales.map((lang) => {
      const urlSplit = pageMap.url.split('/')
      urlSplit.splice(3, 0, lang)
      const urlWithLang = urlSplit.join('/')

      return {
        ...pageMap,
        url: urlWithLang,
      }
    }),
  )

  return urlMap
}

const makeUrlMap = () => {
  const urlMap: MetadataRoute.Sitemap = []
  urlMap.push(
    ...addLanguage({
      url: env.SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }),
  )
  return urlMap
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteMap = makeUrlMap()
  return siteMap
}
