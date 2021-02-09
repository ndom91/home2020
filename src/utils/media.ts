import sizes from '../../config/Theme'

export const media = {
  large: `(max-width: ${sizes.large})`,
  medium: `(max-width: ${sizes.medium})`,
  small: `(max-width: ${sizes.small})`,
  xsmall: `(max-width: ${sizes.xsmall})`,
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
