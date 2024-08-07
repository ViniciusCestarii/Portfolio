import 'server-only'
import { DictionaryType } from './dictionary'

const dictionaries = {
  en: () => import('./locales/en').then((module) => module.default),
  es: () => import('./locales/es').then((module) => module.default),
  fr: () => import('./locales/fr').then((module) => module.default),
  pt: () => import('./locales/pt').then((module) => module.default),
}

export const locales = Object.keys(dictionaries)

export type DictionaryKeyType = keyof typeof dictionaries

export type DictionaryProps = {
  dict: DictionaryType
}

export const getDictionary = async (locale: DictionaryKeyType) =>
  dictionaries[locale]()
