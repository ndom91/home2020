const sizes = {
  large: '1400px',
  medium: '700px',
  small: '425px',
  xsmall: '350px',
}

export const media = {
  large: `(max-width: ${sizes.large})`,
  medium: `(max-width: ${sizes.medium})`,
  small: `(max-width: ${sizes.small})`,
  xsmall: `(max-width: ${sizes.xsmall})`,
}

export function titleCase(str: string): string {
  const splitStr = str.toLowerCase().split(' ')
  for (const i = 0; i < splitStr.length; i + 1) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }
  return splitStr.join(' ')
}
