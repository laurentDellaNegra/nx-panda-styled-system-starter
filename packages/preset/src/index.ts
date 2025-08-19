import { definePreset } from '@pandacss/dev';
import { alertRecipe } from './alert.js';
import { buttonRecipe } from './button.js';

const preset = definePreset({
  name: 'preset',
  theme: {
    extend: {
      tokens: {
        colors: {
          cobalt: {
            50: {
              value: '#EBEDF9',
            },
            100: {
              value: '#D3D7EE',
            },
            200: {
              value: '#959CDE',
            },
            300: {
              value: '#5460C8',
            },
            400: {
              value: '#1020B9',
            },
          },
        },
      },
      recipes: {
        button: buttonRecipe,
      },
      slotRecipes: {
        alert: alertRecipe,
      },
    },
  },
});

export default preset;
