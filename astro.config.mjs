import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
// # site: 'https://astro-multiverse.vercel.app',
  output: "server",
  adapter: netlify(),
});