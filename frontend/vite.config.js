import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // <-- Move this to correct position
    rollupOptions: {
      output: {
        manualChunks: {
          // Combine react+dom to prevent empty chunk
          react: ['react', 'react-dom', 'react-router'],
          streamchat: ['stream-chat', 'stream-chat-react'],
          tanstack: ['@tanstack/react-query'],
          vendor: ['axios', 'zustand', 'lucide-react']
        }
      }
    }
  }
});
