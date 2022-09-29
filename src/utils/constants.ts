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
