import { Sizes } from './sizes';
import { ThemeType } from './types';

export const lightTheme: ThemeType = {
  palette: {
    background: '#ffffff',
    listItem: '#f6f8fa',
    input: {
      background: '#ffffff',
      border: '#aaaaaa',
    },
    text: {
      primary: '#000000',
      secondary: '#91989f',
    },
    button: {
      active: '#238636',
      label: '#ffffff',
    },
  },
  sizes: Sizes,
};
