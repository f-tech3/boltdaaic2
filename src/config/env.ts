export const env = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL as string,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string,
  },
} as const;

// Validate environment variables
const requiredEnvVars = [
  ['VITE_SUPABASE_URL', env.supabase.url],
  ['VITE_SUPABASE_ANON_KEY', env.supabase.anonKey],
] as const;

for (const [key, value] of requiredEnvVars) {
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${key}. Please check your .env file.`
    );
  }

  if (value === 'your-supabase-url' || value === 'your-supabase-anon-key') {
    throw new Error(
      `Please replace the placeholder value for ${key} in your .env file with your actual Supabase credentials.`
    );
  }
}