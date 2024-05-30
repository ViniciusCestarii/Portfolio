'use server'
import { ThemeColor } from '@/types/layout/Theme'
import { cookies } from 'next/headers'

export default async function setThemeCookie(theme: ThemeColor) {
  cookies().set('theme', JSON.stringify(theme))
}
