import { Sizes } from "./sizes";

export interface ThemeType {
    palette: {
        background: string,
        border: string,
        input: string,
        text: {
            primary: string;
            secondary: string;
        };
    };
    sizes: typeof Sizes;
}
