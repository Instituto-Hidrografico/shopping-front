import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: `/shopping/`,
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
})
