import React from 'react'
import { createGlobalStyle } from 'styled-components'

const Fonts = createGlobalStyle`
  /* lato-300 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    src: local(''), url('../fonts/lato-v17-latin-300.woff2') format('woff2'),
      url('../fonts/lato-v17-latin-300.woff') format('woff');
  }
  /* lato-regular - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local(''), url('../fonts/lato-v17-latin-regular.woff2') format('woff2'),
      url('../fonts/lato-v17-latin-regular.woff') format('woff'); 
  }
  /* playfair-display-regular - latin */
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 400;
    src: local(''), url('../fonts/playfair-display-v22-latin-regular.woff2') format('woff2'),
      url('../fonts/playfair-display-v22-latin-regular.woff') format('woff'); 
  }
  /* playfair-display-500 - latin */
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 500;
    src: local(''), url('../fonts/playfair-display-v22-latin-500.woff2') format('woff2'),
      url('../fonts/playfair-display-v22-latin-500.woff') format('woff'); 
  }
  /* playfair-display-600 - latin */
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 600;
    src: local(''), url('../fonts/playfair-display-v22-latin-600.woff2') format('woff2'),
      url('../fonts/playfair-display-v22-latin-600.woff') format('woff'); 
  }
`

const Typography: React.FunctionComponent = () => {
  return (
    <>
      <Fonts />
    </>
  )
}

export default Typography
