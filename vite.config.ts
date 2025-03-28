import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Ensures that Vite follows symlinks for the linked library.
    preserveSymlinks: true,
    // This also helps prevent duplicate React instances.
    dedupe: ['react', 'react-dom']
  }
});