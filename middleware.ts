import { NextResponse, type NextRequest } from "next/server";

const SESSION_COOKIE = "sorteio_solidario_session";

export function middleware(request: NextRequest) {
  const hasSession = request.cookies.has(SESSION_COOKIE);

  if (!hasSession) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/painel/:path*"]
};
