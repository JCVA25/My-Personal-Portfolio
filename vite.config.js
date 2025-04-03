import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: process.env.PORT || 3000
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: true
  },
  preview: {
    port: process.env.PORT || 3000
  }
})