import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Footer from './Footer'
import theme from '../../config/Theme'
import { media } from '../utils/media'

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }
  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.grey.default};
    @media ${media.small} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.colors.grey.dark};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.grey.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
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
  .textRight {
    text-align:right;
  }
  :root {
    // Colors
   --white: #fff;
   --black: #000;
   --grey: #595959;
   --grey-dark: #2b2b2b;
   --grey-light: #eee;
   --green: #86c023;
   --blue: #017ac7;

    // Transition
   --duration: 400ms;
   --easing: ease;
  }
`

const PrimaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export class Layout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <PrimaryWrapper>
          <GlobalStyle />
          {children}
          <Footer />
        </PrimaryWrapper>
      </ThemeProvider>
    )
  }
}
