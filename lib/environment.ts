const requiredEnvironmentVariables = [
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
  "CLERK_SECRET_KEY",
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
] as const;

type RequiredEnvironmentVariable = (typeof requiredEnvironmentVariables)[number];

function readEnvironmentVariable(name: RequiredEnvironmentVariable): string {
  const value = process.env[name];

  if (!value?.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function assertEnvironment(): void {
  for (const name of requiredEnvironmentVariables) {
    readEnvironmentVariable(name);
  }
}

export const environment = {
  get supabaseUrl(): string {
    return readEnvironmentVariable("NEXT_PUBLIC_SUPABASE_URL");
  },
  get supabasePublishableKey(): string {
    return readEnvironmentVariable("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
  },
};
