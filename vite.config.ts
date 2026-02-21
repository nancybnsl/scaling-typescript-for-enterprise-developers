import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.test.ts', '**/*.spec.ts'],
    typecheck: {
        enabled: true,
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    }
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
});
