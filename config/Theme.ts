// @ts-ignore
import config from './SiteConfig'

type Font = {
  name: string
  styles: string[]
}

type Typography = {
  baseFontSize: string
  googleFonts: Font[]
}

interface Sizes {
  xsmall: string
  small: string
  medium: string
  large: string
}

const colors = {
  primary: '#fc6767', // Color for buttons or links
  bg: '#fff', // Background color
  white: '#fff',
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
    ultraUltraLight: 'rgba(0, 0, 0, 0.1)',
  },
}

const typography: Typography = {
  baseFontSize: config.baseFontSize,
  googleFonts: [
    {
      name: config.sanSerifFontFamily,
      styles: ['200', '300', '400'],
    },
    {
      name: config.serifFontFamily,
      styles: ['400', '500', '600'],
    },
  ],
}

const transitions = {
  normal: '0.5s',
}

const fontSize = {
  small: '0.9rem',
  big: '2.9rem',
}

const space = {
  normal: '2rem',
  small: '1rem',
  medium: '1.5rem',
  large: '3rem',
}

const sizes: Sizes = {
  large: '1400px',
  medium: '700px',
  small: '500px',
  xsmall: '350px',
}

export default {
  colors,
  transitions,
  fontSize,
  space,
  sizes,
  typography,
}
