import React, { useEffect } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Footer from './Footer'
import Helmet from 'react-helmet'
import { media } from '../utils/media'
import Typography from './Typography'
// @ts-ignore
import config from '../../config/SiteConfig'

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: var(--bg);
    background: var(--primary);
  }
  html,
  body {
    height: 100%;
  }
  body {
    background: var(--bg);
    color: var(--grey-default);
    margin: 0;
    @media ${media.small} {
      font-size: 14px;
    }
  }
  a {
    color: var(--primary);
    text-decoration: none;
    transition: all 500ms;
  }
  a:hover {
    color: var(--primary);
  }
  h1, h2, h3, h4 {
    color: var(--grey-dark);
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: var(--primary);
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: var(--grey-dark);
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
  :root {
    --primary: #fc6767;
    --bg: #fff;
    --white: #fff;
    --header-bg: rgba(14, 11, 17, 0.5);
    --code-bg: rgba(32, 29, 34);
    --secondary-bg: #eee;
    --grey-dark: rgba(0, 0, 0, 0.9);
    --grey-default: rgba(0, 0, 0, 0.7);
    --grey-light: rgba(0, 0, 0, 0.5);
    --grey-lighter: rgba(0, 0, 0, 0.25);
    --grey-lightest: rgba(0, 0, 0, 0.1);
    --font-sansSerif: Lato, Ubuntu, Helvetica, "sans-serif";
    --font-serif: Playfair Display, Merriweather, Impact, "serif";
  }
  :root[data-theme='dark'] {
    --primary: #fc6767;
    --bg: #0e0b11;
    --white: #fff;
    --header-bg: rgba(14, 11, 17, 0.5);
    --code-bg: #070508;
    --secondary-bg: #232027;
    --grey-dark: rgba(255,255,255, 0.9);
    --grey-default: rgba(255,255,255, 0.7);
    --grey-light: rgba(255,255,255, 0.5);
    --grey-lighter: rgba(255,255,255, 0.25);
    --grey-lightest: rgba(255,255,255, 0.1);

    h1, h2 {
      color: #fff;
      text-shadow: 
        0 0 0.033em #fff, 
        0 0 0.08em #fff,
        0 0 0.1em var(--primary), 
        0 0 0.2em var(--primary), 
        0 0 0.3em var(--primary), 
        0 0 1em var(--primary),
        0 0 1.5em var(--primary);
    }
    .flicker {
      animation: flicker 3s linear forwards alternate infinite;

      &:nth-child(even) {
        animation-delay: 0.3s;
        animation-direction: alternate-reverse;
      }
    }
  }
  @keyframes flicker {
    0%,
    19.999%,
    22%,
    62.999%,
    64%,
    64.999%,
    72%,
    100% {
      opacity: 1;
    }
    20%,
    21.999%,
    63%,
    63.999%,
    65%,
    71.999% {
      opacity: 0.33;
    }
  }
`

const PrimaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  overflow: hidden;
`

function setFlickerAnimation() {
  const animatedElements = Array.from(document.querySelectorAll('.js-darkmode-flicker'))

  if (!animatedElements.length) {
    return false
  }

  const wrapRandomChars = (str: string, iterations = 1) => {
    const chars = str.split('')
    const excludedChars = [' ', '-', ',', ';', ':', '(', ')']
    const excludedIndexes: number[] = []
    let i = 0

    while (i < iterations) {
      const randIndex = Math.floor(Math.random() * chars.length)
      const c = chars[randIndex]

      if (!excludedIndexes.includes(randIndex) && !excludedChars.includes(c)) {
        chars[randIndex] = `<span class="flicker">${c}</span>`
        excludedIndexes.push(randIndex)
        i++
      }
    }

    return chars.join('')
  }

  animatedElements.forEach((el) => {
    if (!el) return
    const text = el.textContent?.trim() || ''
    el.innerHTML = wrapRandomChars(text, 1)
  })
}

const getInitialColorMode = (): string => {
  if (typeof window === 'undefined') return 'light'
  const persistedColorPreference = window?.localStorage.getItem('color-mode')

  if (typeof persistedColorPreference === 'string') {
    return persistedColorPreference
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light'
  }

  return 'light'
}

export const Layout: React.FunctionComponent = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(getInitialColorMode)

  const setColorMode = (value: string) => {
    rawSetColorMode(value)
    window.localStorage.setItem('color-mode', value)
  }

  useEffect(() => {
    setFlickerAnimation()
  }, [])

  const title = config.siteTitle
  const description = config.siteDescription
  const image = config.siteBanner

  return (
    <ThemeProvider theme={{ colorMode, setColorMode }}>
      <PrimaryWrapper>
        <Helmet>
          <html lang={config.siteLanguage} />
          <title>{config.siteTitle}</title>
          <meta name="description" content={description} />
          <meta name="image" content={image} />
          <meta property="og:locale" content={config.ogLanguage} />
          <meta property="og:site_name" content={config.ogSiteName ? config.ogSiteName : ''} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:url" content={config.siteUrl} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </Helmet>
        <audio src="/assets/toggle-off.mp3" id="js-sound-off" preload="auto" hidden></audio>
        <audio src="/assets/toggle-on.mp3" id="js-sound-on" preload="auto" hidden></audio>
        <Typography />
        <GlobalStyle />
        {children}
        <Footer />
      </PrimaryWrapper>
    </ThemeProvider>
  )
}
