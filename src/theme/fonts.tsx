type TFontWidth = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const SIZES = {
    title: 14,
    para: 12,
}

export const FAMILIES = {
    title_popins: "Poppins-SemiBold"
}
export const WEIGHTS = {
    title: 500
} as const;



export const SPACING = {
    tiny: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    ['3xl']: 20,
    ['4xl']: 24,
    ['5xl']: 32,
}