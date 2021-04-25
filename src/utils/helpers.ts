const titleCase = (str: string): string => {
  let upper = true
  let newStr = ''
  for (let i = 0, l = str.length; i < l; i++) {
    if (str[i] == ' ') {
      upper = true
      newStr += str[i]
      continue
    }
    newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase()
    upper = false
  }
  return newStr
}

const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export { titleCase, slugify }
