/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { initializeServer } from "./libs/server";
import { checkValidToken } from "./apis/account";
import { ERROR_STATUSES } from "./libs/error";

export async function middleware(request: NextRequest) {
  // console.log({
  //   Cookies: request.cookies.getAll()
  // });

  if (["/guides"].some((path) => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }
  if (["/account"].some((path) => request.nextUrl.pathname.startsWith(path))) {
    const isShowGuide = request.cookies.get("isShowGuide")?.value;
    if (isShowGuide) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/guides", request.url));
  }
  const accessToken = request.cookies.get("accessToken");
  initializeServer(
    accessToken?.value ? { accessToken: accessToken?.value } : undefined
  );

  try {
    await checkValidToken();
  } catch (error) {
    if (error.response?.status === ERROR_STATUSES.Unauthorized) {
      return NextResponse.redirect(
        new URL("/account/signin?errorStatus=401", request.url)
      );
    }
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/guides",
    "/account/:path*",
    "/bookmarks/:path*",
    "/checklist/:path*",
    "/friend/:path*",
    "/my/:path*",
  ],
};
