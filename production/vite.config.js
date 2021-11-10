import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './',
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        game_search: new URL('./game_search.html', import.meta.url).pathname,
      },
    },
  },
})
