// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from "next/server";
import { guestSignupServer } from "../../../../apis/account";
import { storage } from "../../../../libs/ssr-cookie-storage";

export async function GET(request: Request) {
  const response = await guestSignupServer();
  storage().setAccessToken(response.data?.accessToken);
  storage().setMemberId(response.data?.memberId);

  return NextResponse.json(response);
}
