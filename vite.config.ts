import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the built site works from any folder (e.g. XAMPP htdocs subfolder).
export default defineConfig({
  base: './',
  plugins: [react()],
});
