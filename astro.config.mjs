import { defineConfig } from 'astro/config';

export default defineConfig({
  // Soporte para módulos Node.js
  vite: {
    define: {
      global: 'globalThis',
    },
    resolve: {
      alias: {
        buffer: 'buffer',
      },
    },
  }
});