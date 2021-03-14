import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Wrapper } from '../components'
import { DefaultPageProps } from '../models'
import Helmet from 'react-helmet'
// @ts-ignore
import config from '../../config/SiteConfig'
import { media } from '../utils/media'
import { Header } from '../components/Header'

const Homepage = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  flex-grow: 1;
  position: relative;

  @media ${media.small} {
    height: 100%;
    padding: 100px 0;
  }
`

const HomepageContent: any = styled.div`
  display: flex;
  max-width: 55rem;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: space-around;
  font-size: 1.5rem;
  z-index: 20;

  @media ${media.large} {
    padding: 2rem;
  }
`

const PreHeader: any = styled.div`
  font-size: 1.4rem;
  font-family: var(--font-sansSerif);
  font-weight: 100;
  color: var(--primary);
`

const HeaderText: any = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  font-family: var(--font-serif);
  color: var(--grey-default);

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
  font-family: var(--font-sansSerif);
  color: var(--grey-light);
  display: inline-block;
  line-height: 2.7rem;

  @media ${media.large} {
    font-size: 1.5rem;
  }
  @media ${media.medium} {
    font-size: 1.3rem;
  }
  @media ${media.small} {
    font-size: 1.3rem;
  }

  a {
    color: var(--grey-light);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    height: 50px;

    &:before {
      content: '';
      display: block;
      height: 0.5em;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -3px;
      z-index: -1;
      background-color: rgba(0, 0, 0, 0.05);
    }
    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0;
      right: 100%;
      bottom: -3px;
      height: 0.5em;
      transition: right 250ms ease-in-out;
    }
    &:hover {
      color: var(--grey-light);
    }
    &:nth-child(1):after {
      background: #44acf5;
    }
    &:nth-child(2):after {
      background: var(--primary);
    }
    &:nth-child(3):after {
      background: #44acf5;
    }
    &:hover:after,
    &:focus:after,
    &:active:after {
      color: var(--grey-light);
      right: 0;
    }
  }
`

const OfficeWorker = styled.img`
  position: absolute;
  width: 40vw;
  opacity: 0.08;
  top: calc(25% - 13rem);
  right: -14rem;
  transform: rotate(12deg);
  max-width: 700px;
  pointer-events: none;
  z-index: 10;

  @media ${media.xlarge} {
    top: calc(25% - 12rem);
    right: -4rem;
    width: 60vw;
  }
  @media ${media.large} {
    top: calc(25% - 10rem);
    right: -3rem;
    width: 60vw;
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
            <HeaderText className="js-darkmode-flicker">I make shit for the web</HeaderText>
            <SubHeader>
              During the day, I'm a full-stack javascript developer at <a href="https://checklyhq.com">Checkly</a> 🦝. In the evenings you
              can find me working on open source software or catching up on the latest Netflix series. I'm based in Frankfurt, Germany where
              I occasionally write about my adventures in tech on my <Link to="/blog">blog</Link> 📓 and if you like memes, movies, and web
              development you might also enjoy following me on <a href="https://twitter.com/ndom91">Twitter</a> 🐦.
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
