import { ThemeColor } from '@/types/layout/Theme'
import { cookies } from 'next/headers'

export default function getThemeColor() {
  const stringTheme = cookies().get('theme')

  if (!stringTheme) {
    return undefined
  }

  return JSON.parse(stringTheme.value) as ThemeColor
}
