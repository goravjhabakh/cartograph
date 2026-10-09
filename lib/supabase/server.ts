import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";
import { environment } from "@/lib/environment";

/**
 * Supabase uses Clerk's session token directly. It must not own a second
 * browser session or write its own auth cookies.
 */
export async function createServerSupabaseClient() {
  const { getToken } = await auth();

  return createClient(
    environment.supabaseUrl,
    environment.supabasePublishableKey,
    {
      auth: {
        autoRefreshToken: false,
        detectSessionInUrl: false,
        persistSession: false,
      },
      accessToken: () => getToken(),
    },
  );
}
