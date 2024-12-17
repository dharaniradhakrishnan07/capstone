import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the React plugin
import tailwindcss from 'tailwindcss'; // Import tailwindcss statically
import autoprefixer from 'autoprefixer'; // Import autoprefixer statically

export default defineConfig({
  plugins: [react()],  // Use the React plugin to enable React support

  optimizeDeps: {
    include: ['tailwindcss'],  // Include tailwindcss in the dependency optimization
  },

  server: {
    port: 3000,           // Set the port for the development server
    open: true,           // Automatically open the browser when the server starts
    proxy: {              // Proxy setup for handling API requests (optional)
      '/api': 'http://localhost:5000',  // Example: Proxy to a local backend server
    },
  },

  build: {
    outDir: 'build',      // Output directory after build (default: 'dist')
    sourcemap: true,      // Generate sourcemaps for debugging in production
    minify: 'esbuild',    // Minify the production build using esbuild (fast and efficient)
    chunkSizeWarningLimit: 500, // Set chunk size warning limit (adjustable as needed)
  },

  resolve: {
    alias: {
      '@components': '/src/components',  // Path alias for cleaner imports (optional)
      '@assets': '/src/assets',          // Another example alias for assets folder
    },
  },

  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],  // Use tailwindcss and autoprefixer statically
    },
  },
});
