// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  image: {
    service: passthroughImageService(),
  },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});



