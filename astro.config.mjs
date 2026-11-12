import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://goauvra.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
