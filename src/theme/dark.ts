import { Sizes } from "./sizes";
import { ThemeType } from "./types";

export const darkTheme:ThemeType = {
  palette: {
    background: '#121212',
    border: '#aaaaaa',
    input: '#ffffff',
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
     button: {
      active: '#238636',
      disabled: '#9CA3AF'
    }
  },
  sizes: Sizes,
}