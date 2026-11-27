import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import portfolioPwa from './scripts/pwa-plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), portfolioPwa()]
})
