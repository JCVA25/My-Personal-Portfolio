import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/dist",
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    allowedHosts: [".onrender.com"]
  }
})