import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    __DEV__: mode === 'development',
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: mode === 'development',
  },
  server: {
    port: 5173,
    open: true,
  },
}));
