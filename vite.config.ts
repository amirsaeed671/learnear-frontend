import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      {
        find: '@features',
        replacement: path.resolve(__dirname, './src/features'),
      },
      { find: '@shared', replacement: path.resolve(__dirname, './src/shared') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@views', replacement: path.resolve(__dirname, './src/views') },
      { find: '@styles', replacement: path.resolve(__dirname, './src/styles') },
    ],
  },
})
