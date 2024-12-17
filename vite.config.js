import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: {
        main: '/src/index.html',
      },
    },
    outDir: 'build',
    sourcemap: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 500,
  },

  optimizeDeps: {
    include: ['tailwindcss'],
  },

  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },

  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
    },
  },

  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
