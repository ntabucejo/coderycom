import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const middleware = (request: NextRequestWithAuth) => {
  const token = request.nextauth.token;
  const pathname = request.nextUrl.pathname;
  if (!token && pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export default withAuth(middleware, {
  callbacks: { authorized: () => true },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
