import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Use function form to reliably set base when building (for GitHub Pages)
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // When building for production, ensure assets are served from the repo subpath
  base: command === 'build' ? '/My-portfolio/' : '/',
  server: {
    port: 3000,
    open: true // Automatically open your browser
  }
}))
