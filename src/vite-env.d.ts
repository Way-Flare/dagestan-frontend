/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_MAP_PUBLIC_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
