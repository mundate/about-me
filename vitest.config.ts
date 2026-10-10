import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

// https://vitest.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['test/**/*.test.{ts,tsx}'],
      environment: 'node',
    },
  }),
)
