import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        survey: resolve(__dirname, 'survey/index.html'),
        fellowship: resolve(__dirname, 'fellowship/index.html'),
        fellowshipApply: resolve(__dirname, 'fellowship/apply/index.html'),
        partnerships: resolve(__dirname, 'partnerships/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true
  }
})
