import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Relative so the build works at /Components/changelanguage/dist/ on GitHub Pages
  // and from a local static server.
  base: './',
  plugins: [react()],
})
