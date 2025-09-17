export const Sizes = {
    spacing: {
        XS: 4,
        SM: 8,
        MD: 16,
        LG: 24,
        XL: 32,
    },
    typography: {
        XS: 12,
        SM: 16,
        MD: 20,
        LG: 24,
        XL: 32,
    }
} as const;

export type Sizes = keyof typeof Sizes;