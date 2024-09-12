import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';

export default function middleware(req) {
  const { pathname } = req.nextUrl;

  // Ensure middleware does not run on API routes or static files
  if (pathname.match(/^\/api|^\/_next\/|^\/favicon.ico/)) {
    return NextResponse.next();
  }

  // Retrieve token from cookies
  const token = getCookie('token', { req });

  // If the user is on the landing page (/) and has a token, redirect to /dashboard
  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // If the user is on /dashboard and doesn't have a token, redirect to the landing page (/)
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Continue to the requested page if no redirection is needed
  return NextResponse.next();
}

// Ensure Middleware does not run on API routes or static files
export const config = {
  matcher: ['/((?!api|_next\/static|_next\/image|favicon.ico).*)'],
};
