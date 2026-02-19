import { auth } from "./auth";

const PUBLIC_ROUTES = ["/login"];
const DEFAULT_REDIRECT = "/login";

export default auth((req) => {
  const { nextUrl } = req;

  const isAuthenticated = !!req.auth;
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  if (isPublicRoute && isAuthenticated)
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon\\.ico|favicon\\.svg|favicon-96x96\\.png|apple-touch-icon\\.png|site\\.webmanifest|web-app-manifest-.*\\.png|images).*)"],
};
