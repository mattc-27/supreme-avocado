import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Specify the root directory
  base: '/supreme-avocado/',
 // publicDir: 'public', // Path for static assets
 build: {
  outDir: 'dist', // Output directory for build
  emptyOutDir: true, // Clear the dist folder before build
},
  server: {
    port: 8000, // Server port
    open: true,
  },
});
