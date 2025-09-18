import { Sizes } from './sizes';
import { ThemeType } from './types';

export const lightTheme: ThemeType = {
  palette: {
    background: '#ffffff',
    listItem: '#555555',
    input: {
      background: '#ffffff',
      border: '#aaaaaa',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
    button: {
      active: '#238636',
      disabled: '#9CA3AF',
    },
  },
  sizes: Sizes,
};
