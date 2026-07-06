import { defineConfig } from 'vite';
import react from '@vitejs/react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are resolved relatively, preventing broken paths on deployment
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Enables clean absolute imports from the src root
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Faster, production-grade minification
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'], // Code-splitting core assets for better performance
        },
      },
    },
  },
});