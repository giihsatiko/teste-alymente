import { Sizes } from './sizes';

export interface ThemeType {
  palette: {
    background: string;
    listItem: string;
    input: {
      background: string;
      border: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    button: {
      active: string;
      disabled: string;
    };
  };
  sizes: typeof Sizes;
}
