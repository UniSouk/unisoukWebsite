import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(
    new URL("/solutions/unified-commerce/", request.url),
    301,
  );
}
