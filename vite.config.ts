import { defineConfig } from 'vite'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vituum(),
    nunjucks({
      root: './src',
    }),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
