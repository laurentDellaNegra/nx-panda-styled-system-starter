import { definePreset } from '@pandacss/dev';

export default definePreset({
  name: 'my-preset',
  theme: {
    tokens: {
      colors: {
        rose: {
          50: { value: '#fff1f2' },
          800: { value: '#9f2233' },
        },
      },
    },
  },
});
