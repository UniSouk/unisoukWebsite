import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/" || pathname.endsWith("/")) {
    return NextResponse.next();
  }

  const canonicalUrl = request.nextUrl.clone();
  canonicalUrl.pathname = `${pathname}/`;
  return NextResponse.rewrite(canonicalUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
