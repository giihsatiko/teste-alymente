import { Sizes } from "./sizes";
import { ThemeType } from "./types";

export const darkTheme:ThemeType = {
  palette: {
    background: '#010409',
    listItem: '#151b23',
    input:{
      background: '#ffffff',
      border: '#aaaaaa'
    },
    text: {
      primary: '#ffffff',
      secondary: '#9198a1',
    },
     button: {
      active: '#238636',
      disabled: '#9CA3AF'
    }
  },
  sizes: Sizes,
}