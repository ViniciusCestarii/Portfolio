import { NextRequest, NextResponse } from 'next/server'
import Negotiator from 'negotiator'
import { locales } from './dictionaries/getDictionary'
import { match } from '@formatjs/intl-localematcher'

const defaultLocale = 'en'

const getNegotiator = (request: NextRequest) => {
  const userLanguages = request.headers.get('accept-language') ?? defaultLocale
  const headers = { 'accept-language': userLanguages }

  return new Negotiator({ headers })
}

function getLocale(request: NextRequest) {
  const languages = getNegotiator(request).languages()

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}`),
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|.*\\.svg$|.*\\.png$|.*\\.xml$|cover).*)'],
}
