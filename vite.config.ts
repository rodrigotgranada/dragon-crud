import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/shared/styles/variables.scss" as v; @use "@/shared/styles/breakpoints.scss" as b;`,
        includePaths: [path.resolve(__dirname, 'src')]
      }
    }
  }
})
