// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My-portfolio-site-io/', // 👈 VERY IMPORTANT
  plugins: [react()],
})
