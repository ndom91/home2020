import theme from '../../config/Theme'

export const media = {
  xlarge: `(max-width: ${theme.sizes.xlarge})`,
  large: `(max-width: ${theme.sizes.large})`,
  medium: `(max-width: ${theme.sizes.medium})`,
  small: `(max-width: ${theme.sizes.small})`,
  xsmall: `(max-width: ${theme.sizes.xsmall})`,
}

export function titleCase(str: string): string {
  if (!str) {
    return ''
  }
  const splitStr = str.toLowerCase().split(' ')
  splitStr.forEach((s, i) => {
    splitStr[i] = s.charAt(0).toUpperCase() + s.substring(1)
  })
  return splitStr.join(' ')
}
