import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Footer from './Footer'
import Helmet from 'react-helmet'
import theme from '../../config/Theme'
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
    color: var(--grey-dark);
    text-decoration: none;
    transition: all ${theme.transitions.normal};
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
    --grey-ultraLight: rgba(0, 0, 0, 0.25);
    --grey-ultraUltraLight: rgba(0, 0, 0, 0.1);
  }
`

const PrimaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  overflow: hidden;
`

export const Layout: React.FunctionComponent = (props) => {
  const { children } = props

  const title = config.siteTitle
  const description = config.siteDescription
  const image = config.siteBanner

  return (
    <ThemeProvider theme={theme}>
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
        <Typography />
        <GlobalStyle />
        {children}
        <Footer />
      </PrimaryWrapper>
    </ThemeProvider>
  )
}
