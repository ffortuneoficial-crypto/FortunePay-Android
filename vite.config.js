import { defineConfig } from 'vite';

// Relative paths allow the same build to work on GitHub Pages and inside Capacitor.
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
