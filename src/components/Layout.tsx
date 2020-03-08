import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../../config/Theme'
import { media } from '../utils/media'
import split from 'lodash/split'
import './layout.scss'

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
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid ${theme.colors.grey.ultraUltraLight};
  text-align: center;
  padding: 0.5rem 0;
  span {
    font-size: 0.75rem;
  }
`

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Cormorant Garamond';
  justify-content: center;
  margin: 20px;
  min-width: 6rem;
  font-size: 0.85rem;

  & div:nth-child(1) {
    color: ${theme.colors.grey.dark};
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0rem;
  }
  & a {
    font-weight: 100;
    color: ${theme.colors.grey.light};
    display: inline;
    letter-spacing: -0.2px;
  }
`

export class Layout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              buildTime(formatString: "DD.MM.YYYY")
              siteMetadata {
                github
                twitter
                mail
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <GlobalStyle />
              {children}
              <Footer>
                <FooterContent>
                  <FooterSection>
                    <div>&copy; {split(data.site.buildTime, '.')[2]}</div>
                    <Link to="/">Nico Domino</Link>
                  </FooterSection>
                  <FooterSection>
                    <div>Contact</div>
                    <Link to={`mailto:${data.site.siteMetadata.mail}`}>{data.site.siteMetadata.mail}</Link>
                  </FooterSection>
                  <FooterSection>
                    <div>Social</div>
                    <div>
                      <Link target="_blank" rel="noopener noreferrer" to={`https://twitter.com/${data.site.siteMetadata.twitter}`}>
                        Twitter
                      </Link>
                      {' / '}
                      <Link target="_blank" rel="noopener noreferrer" to={`https://github.com/${data.site.siteMetadata.github}`}>
                        Github
                      </Link>
                    </div>
                  </FooterSection>
                </FooterContent>
              </Footer>
            </React.Fragment>
          </ThemeProvider>
        )}
      />
    )
  }
}
