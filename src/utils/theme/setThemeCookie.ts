'use server'
import { ThemeColor } from '@/types/layout/Theme'
import { cookies } from 'next/headers'

// 5 months
const maxAge = 60 * 60 * 24 * 30 * 5

export default async function setThemeCookie(theme: ThemeColor) {
  cookies().set('theme', JSON.stringify(theme), {
    sameSite: 'lax',
    maxAge,
  })
}
