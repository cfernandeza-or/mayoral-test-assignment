export const WINDOW_SCREEN_SIZE = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
}

export const DEVICE = {
    mobileS: `(max-width: ${WINDOW_SCREEN_SIZE.mobileS}px)`,
    mobileM: `(max-width: ${WINDOW_SCREEN_SIZE.mobileM}px)`,
    mobileL: `(max-width: ${WINDOW_SCREEN_SIZE.mobileL}px)`,
    tablet: `(max-width: ${WINDOW_SCREEN_SIZE.tablet}px)`,
    laptop: `(max-width: ${WINDOW_SCREEN_SIZE.laptop}px)`,
    laptopL: `(max-width: ${WINDOW_SCREEN_SIZE.laptopL}px)`,
    desktop: `(max-width: ${WINDOW_SCREEN_SIZE.desktop}px)`,
    desktopL: `(max-width: ${WINDOW_SCREEN_SIZE.desktop}px)`
};

export const COLORS = {
    primaryLight: '#A6D1F5',
    primary: '#84C2F5',
    primaryDark: '#339df5',
    primaryDarken: '#0588f5',
    grayLight: '#e0e0e0',
    gray: '#888888',
    grayDark: '#504F4F',
    black: '#262626',
    error: '#CC0000',
    shadow: 'rgb(149 157 165 / 20%)',
}