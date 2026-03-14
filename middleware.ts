import { type NextRequest } from "next/server";
import { updateSession } from "./utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  // Route all traffic through your Supabase auth lock
  return await updateSession(request);
}

export const config = {
  // This matcher ensures the middleware only runs on actual app pages, 
  // ignoring static files, images, and Next.js internal requests to save compute costs.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};