import 'styled-components/native';
import { lightTheme } from './light';

type ThemeType = typeof lightTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
