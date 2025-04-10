import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        '**/src/components/icons/**',
        'coverage/**',
        'dist/**',
        'node_modules/**',
        'stories/**',
      ],
      enabled: true,
      reporter: ['lcov'],
      provider: 'v8',
      thresholds: {
        branches: 70,
        functions: 80,
        lines: 80,
        statements: 80,
      }
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./spec/init/setupTests.js'],
  },
})
