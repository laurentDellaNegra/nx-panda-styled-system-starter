import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // presets: [@acme/preset'], // if you build completely the preset without the defaults
  presets: ['@pandacss/preset-panda', '@acme/preset'],
  // The output directory for your css system
  outdir: 'dist',
});
