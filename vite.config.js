import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the React plugin
import tailwindcss from 'tailwindcss'; // Import tailwindcss statically
import autoprefixer from 'autoprefixer'; // Import autoprefixer statically


export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/src/index.html', 
      },
    },
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

  build: {
    outDir: 'build',     
    sourcemap: true,      
    minify: 'esbuild',   
    chunkSizeWarningLimit: 500, 
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
});
