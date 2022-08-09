import { NextResponse } from 'next/server'

export default function middleware(request) {
  return NextResponse.redirect(new URL('/base/redirected', request.url))
}

export const config = {
  matcher: [
    '/hello',
  ],
}
