import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Wrapper } from '../components'
import { DefaultPageProps } from '../models'
import Helmet from 'react-helmet'
import theme from '../../config/Theme'
// @ts-ignore
import config from '../../config/SiteConfig'
import { media } from '../utils/media'
import { Header } from '../components/Header'

const Homepage = styled.main`
  display: flex;
  height: 60vh;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  flex: 1;
  margin: 0 auto;
  @media ${media.large} {
    height: 100%;
    flex-direction: column;
  }
  @media ${media.small} {
    height: 100%;
    flex-direction: column;
    margin-bottom: 100px;
  }
`

const HomepageContent: any = styled.div`
  max-width: 60rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  & h3 {
    font-size: 2rem;
  }

  @media ${media.large} {
    font-size: 90%;
  }
  @media ${media.medium} {
    font-size: 80%;
  }
  @media ${media.small} {
    font-size: 70%;
    justify-content: flex-start;
  }
`

const PreHeader: any = styled.div`
  font-size: 1.4rem;
  font-family: ${config.sanSerifFontFamily};
  font-weight: 100;
  color: ${theme.colors.primary};
`
const HeaderText: any = styled.h3`
  font-size: 3rem !important;
  font-weight: 600;
  font-family: ${config.serifFontFamily};
  font-display: swap;
  color: ${theme.colors.grey.default};
  @media ${media.large} {
    font-size: 2.8rem !important;
  }
  @media ${media.medium} {
    font-size: 2.3rem !important;
  }
  @media ${media.small} {
    font-size: 1.9rem !important;
  }
`
const SubHeader: any = styled.div`
  font-weight: 300;
  font-family: ${config.sanSerifFontFamily};
  font-display: swap;
  color: ${theme.colors.grey.light};
  z-index: 2;

  @media ${media.large} {
    font-size: 1.5rem;
    line-height: 2.7rem;
  }
  @media ${media.medium} {
    font-size: 1.3rem;
    line-height: 2.3rem;
  }
  @media ${media.small} {
    font-size: 1.3rem;
    line-height: 2.2rem;
  }

  a {
    display: inline-block;
    vertical-align: middle;
    color: ${theme.colors.grey.light};
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    height: 50px;

    @media ${media.large} {
      height: 47px;
      &:before {
        bottom: 9px !important;
      }
      &:after {
        bottom: 9px !important;
      }
    }
    @media ${media.medium} {
      height: 43px;
      &:before {
        bottom: 9px !important;
      }
      &:after {
        bottom: 9px !important;
      }
    }
    @media ${media.small} {
      height: 40px;
      &:before {
        bottom: 7px !important;
      }
      &:after {
        bottom: 7px !important;
      }
    }

    &:before {
      content: '';
      display: block;
      height: 0.5em;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 11px;
      z-index: -1;
      background-color: rgba(0, 0, 0, 0.05);
    }
    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0;
      right: 100%;
      bottom: 11px;
      height: 0.5em;
      transition-property: right;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
    }
    &:nth-child(1):after {
      background: #44acf5;
    }
    &:nth-child(2):after {
      background: ${theme.colors.primary};
    }
    &:nth-child(3):after {
      background: #44acf5;
    }
    &:hover:after,
    &:focus:after,
    &:active:after {
      right: 0;
    }
  }
`

const OfficeWorker = styled.img`
  position: absolute;
  width: 40vw;
  opacity: 0.08;
  top: 20%;
  right: 10%;
  transform: rotate(12deg);
  max-width: 700px;
  @media ${media.large} {
    top: 20%;
    right: 5%;
    width: 60vw;
    transform: rotate(12deg);
  }
  @media ${media.medium} {
    display: none;
  }
`

const IndexPage: React.FunctionComponent<DefaultPageProps> = () => {
  return (
    <Layout>
      <Header />
      <Helmet title={`Homepage | ${config.siteTitle}`} />
      <Wrapper fullWidth={true}>
        <Homepage>
          <HomepageContent>
            <PreHeader>Hi, I'm Nico Domino 👋</PreHeader>
            <HeaderText>I like to make shit for the web</HeaderText>
            <SubHeader>
              I'm a Fullstack Javascript Developer at <a href="https://checklyhq.com">Checkly</a>, opensourcerer, and I'm based in
              Frankfurt, Germany and occasionally write about my thoughts on tech and other happenings here on my{' '}
              <Link to="/blog">blog</Link> and you can find some of my (much less) serious stuff on{' '}
              <a href="https://twitter.com/ndom91">Twitter</a>.
            </SubHeader>
          </HomepageContent>
          <OfficeWorker src="assets/images/office.svg" alt="Office Worker" />
        </Homepage>
      </Wrapper>
    </Layout>
  )
}

export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          timeToRead
        }
      }
    }
  }
`

export default IndexPage
