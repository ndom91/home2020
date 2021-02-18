import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import split from 'lodash/split'
import { media } from '../utils/media'
import theme from '../../config/Theme'
// @ts-ignore
import config from '../../config/SiteConfig'

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #fff;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid ${theme.colors.grey.ultraUltraLight};
  padding: 0.5rem 0;
  span {
    font-size: 0.75rem;
  }
  @media ${media.medium} {
    padding: none;
  }
`

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;

  @media ${media.medium} {
    margin: 15px;
    width: 90%;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${config.sanSerifFontFamily};
  justify-content: center;
  margin: 20px;
  min-width: 6rem;
  font-size: 0.85rem;

  & div:nth-child(1) {
    color: var(--grey-dark);
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 3px;
  }
  & a {
    font-weight: 400;
    color: var(--grey-light);
    display: inline;
    letter-spacing: -0.2px;
  }
  @media ${media.medium} {
    margin: 10px;
  }
  @media ${media.small} {
    margin: 5px;
  }
`

const Footer: React.FunctionComponent = () => {
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
      render={(data) => (
        <FooterWrapper>
          <FooterContent>
            <FooterSection>
              <div>&copy; {split(data.site.buildTime, '.')[2]}</div>
              <Link to="/">Nico Domino</Link>
            </FooterSection>
            <FooterSection>
              <div>Contact</div>
              <a href={`mailto:${data.site.siteMetadata.mail}`}>{data.site.siteMetadata.mail}</a>
            </FooterSection>
            <FooterSection>
              <div>Social</div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${data.site.siteMetadata.twitter}`}>
                  Twitter
                </a>
                {' / '}
                <a target="_blank" rel="noopener noreferrer" href={`https://github.com/${data.site.siteMetadata.github}`}>
                  Github
                </a>
              </div>
            </FooterSection>
          </FooterContent>
        </FooterWrapper>
      )}
    />
  )
}

export default Footer
