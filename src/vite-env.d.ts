/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_PORTAL_CLIENT_URL: string
  readonly VITE_PORTAL_TIM_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
