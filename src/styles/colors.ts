const BRAND_AND_ACCENT = '#FF455B'
const MEDIUM_BLACK = '#A5A7AC'
const FULL_WHITE = '#FFFFFF'
const DARK_BG = '#181A20'
// const FULL_BLACK = '#121420'
// const DARK_SUB_BG = '#222333'

const common = {
  ACCENT: BRAND_AND_ACCENT,
  GREY: MEDIUM_BLACK,
  TEXT: MEDIUM_BLACK
}

const light = {
  ...common,
  BACKGROUND: FULL_WHITE
}

const dark = {
  ...common,
  BACKGROUND: DARK_BG
}

export const colors = { light, dark }
