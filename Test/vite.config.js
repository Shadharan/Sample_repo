import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{allowedHosts:["5173-shadharan-sample-repo-fivfyc8xnj.app.codeanywhere.com"]},
  plugins: [react()],
})
