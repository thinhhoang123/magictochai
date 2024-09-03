import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

const isPublicRoute = createRouteMatcher([
  '/:locale/sign-in(.*)',
  '/:locale/sign-up(.*)',
  '/api/webhooks/clerk',
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) auth().protect();
  return handleI18nRouting(request);
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
