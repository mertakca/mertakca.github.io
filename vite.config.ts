import { defineConfig } from 'vite'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserPage = repository.endsWith('.github.io')

// https://vite.dev/config/
export default defineConfig({
  base: isUserPage || !repository ? '/' : `/${repository}/`,
})
