import React from 'react'
import Helmet from 'react-helmet'
import typography from '../../config/Theme'

export const Typography: React.FunctionComponent = () => {
  if (!typography) return null

  typography.googleFonts.map((font) => {
    console.log(font)
  })
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,300&family=Roboto:ital,wght@0,100;0,300;1,100&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}
