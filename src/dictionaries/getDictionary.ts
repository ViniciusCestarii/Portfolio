import 'server-only'
import { DictionaryType } from './dictionary'

export const locales = ['en', 'es', 'fr', 'pt'] as const

export type DictionaryKeyType = (typeof locales)[number]

export type DictionaryProps = {
  dict: DictionaryType
}

const getDictionaries = async () => {
  const dictionaries = await Promise.all(
    locales.map((lang) =>
      import(`./locales/${lang}`).then((mod) => mod.default as DictionaryType),
    ),
  )

  return Object.fromEntries(
    locales.map((lang, index) => [lang, dictionaries[index]]),
  )
}

export const getDictionary = async (locale: DictionaryKeyType) => {
  const dictionaries = await getDictionaries()

  return dictionaries[locale] || dictionaries.en
}
