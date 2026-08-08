// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  image: {
    service: passthroughImageService(),
  },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});



