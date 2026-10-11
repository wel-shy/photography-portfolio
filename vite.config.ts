/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';

export default defineConfig({
  // The React Router plugin cannot run inside Vitest
  plugins: [!process.env.VITEST && reactRouter()],
  server: {
    port: 3000,
  },
  ssr: {
    // Its CommonJS build cannot be imported by name from the server build
    noExternal: ['styled-components'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    passWithNoTests: true,
  },
});
