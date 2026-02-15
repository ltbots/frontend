import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: [''],
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5172',
        changeOrigin: true,
      },
      '/tg': {
        target: 'http://localhost:5172',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/react/') || id.includes('/node_modules/react-dom/')) {
            return 'react'
          }

          if (id.includes('/node_modules/@tanstack/')) {
            return 'tanstack'
          }

          if (id.includes('/node_modules/@chakra-ui/charts/')) {
            return 'chakra-charts'
          }

          if (id.includes('/node_modules/@chakra-ui/')) {
            return 'chakra'
          }

          if (id.includes('/node_modules/@zag-js/')) {
            return 'zag-js'
          }

          if (id.includes('/node_modules/@tma.js/')) {
            return 'tmajs'
          }

          if (id.includes('/node_modules/@ltbots/api')) {
            return 'api'
          }

          if (id.includes('/src/containers/')) {
            return 'containers'
          }

          return
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
})
