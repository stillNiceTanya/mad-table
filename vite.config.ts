import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      clientPort: 5173,
    },
    port: 5173,
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
  },
});
