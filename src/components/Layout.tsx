import React from 'react'
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
    --bg: #181616;
    --white: #4b4b4b;
    --grey-dark: rgba(255,255,255, 0.9);
    --grey-default: rgba(255,255,255, 0.7);
    --grey-light: rgba(255,255,255, 0.5);
    --grey-lighter: rgba(255,255,255, 0.25);
    --grey-lightest: rgba(255,255,255, 0.1);
  }
`

const PrimaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  overflow: hidden;
`

const getInitialColorMode = (): string => {
  if (typeof window === 'undefined') return 'light'
  const persistedColorPreference = window.localStorage.getItem('color-mode')
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (typeof persistedColorPreference === 'string') {
    return persistedColorPreference
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light'
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'light'
}

export const Layout: React.FunctionComponent = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(getInitialColorMode)

  const setColorMode = (value: string) => {
    rawSetColorMode(value)
    // Persist it on update
    window.localStorage.setItem('color-mode', value)
  }

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
          {/* <link rel="prefetch" href="https://fonts.googleapis.com" />
          <link
            rel="preload"
            href={`https://fonts.googleapis.com/css2?family=Lato:wght@200;300;400&family=Playfair+Display:wght@400;500;600&display=swap`}
            crossOrigin="crossorigin"
            as="style"
          /> */}
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
