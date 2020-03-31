import Typography from 'typography'
import config from '../../config/SiteConfig'

const typography = new Typography({
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.66,
  scaleRatio: 3.157,
  headerFontFamily: [config.headerFontFamily, 'sans-serif'],
  bodyFontFamily: [config.bodyFontFamily, 'sans-serif'],
  headerWeight: 700,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['100', '400', '700'],
    },
    {
      name: config.bodyFontFamily,
      styles: ['100', '400'],
    },
    {
      name: config.sanSerifFontFamily,
      styles: ['100', '300', '400'],
    },
    {
      name: config.serifFontFamily,
      styles: ['100', '300', '500', '600'],
    },
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
