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

const kebabCase = (s: string): string => {
  let result = ''
  const len = s.length

  for (let i = 0; i < len; i++) {
    if (s[i] === s[i].toUpperCase()) {
      result += '-' + s[i].toLowerCase()
    } else {
      result += s[i].toLowerCase()
    }
  }

  return result[0] !== '-' ? result.replace(/ /g, '') : result.substr(1).replace(/ /g, '')
}

export { titleCase, kebabCase }
