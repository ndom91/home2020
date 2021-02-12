import React from 'react'
import Helmet from 'react-helmet'
import theme from '../../config/Theme'

const Typography: React.FunctionComponent = () => {
  if (!theme) return null

  const fontString = theme.typography.googleFonts
    .map((font) => {
      let string = `family=${font.name.replace(' ', '+')}:wght@`
      font.styles.forEach((style) => {
        string = `${string}${style};`
      })
      return string.replace(/.$/, '')
    })
    .join('&')

  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href={`https://fonts.googleapis.com/css2?${fontString}&display=swap`} rel="stylesheet"></link>
    </Helmet>
  )
}

export default Typography
