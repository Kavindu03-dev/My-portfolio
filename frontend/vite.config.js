import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  base: '/My-portfolio/', // GitHub Pages base path
  server: {
    port: 3000,
    open: true // This will automatically open your browser
  }
})
