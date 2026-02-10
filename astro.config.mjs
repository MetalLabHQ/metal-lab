// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://metal-lab.dev',
  vite: {
    plugins: [tailwindcss()]
  }
});