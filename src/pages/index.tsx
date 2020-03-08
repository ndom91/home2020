import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Wrapper, Button, Article } from '../components'
import PageProps from '../models/PageProps'
import Helmet from 'react-helmet'
import theme from '../../config/Theme'
import config from '../../config/SiteConfig'
import { media } from '../utils/media'
import { Header } from '../components/Header'
import rgba from 'polished/lib/color/rgba'
import darken from 'polished/lib/color/darken'
import lighten from 'polished/lib/color/lighten'

const Homepage = styled.main`
  display: flex;
  height: 60vh;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media ${media.tablet} {
    height: 100%;
    flex-direction: column;
  }
  @media ${media.phone} {
    height: 100%;
    flex-direction: column;
  }
`

const GridRow: any = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5rem 10rem;
  color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  h1 {
    color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  }
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`

const HomepageContent: any = styled.div`
  max-width: 50rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 450px;

  & h3 {
    font-size: 2rem;
  }
`

const PreHeader: any = styled.div`
  font-size: 1.4rem;
  font-family: ${config.serifFontFamily};
  color: ${theme.colors.primary};
  margin-bottom: 20px;
`
const HeaderText: any = styled.h3`
  font-size: 3rem !important;
  font-weight: 600;
  font-family: ${config.serifFontFamily};
  color: ${theme.colors.grey.default};
  margin-bottom: 20px;
`
const SubHeader: any = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  font-family: ${config.sanSerifFontFamily};
  color: ${theme.colors.grey.light};
  margin-bottom: 20px;

  a {
    display: inline-block;
    vertical-align: middle;
    color: ${theme.colors.grey.light};
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    height: 60px;

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
      background: #67b246;
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

const LinkWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  width: auto;
  justify-content: flex-start;
`

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    const { data } = this.props
    const { edges, totalCount } = data.allMarkdownRemark
    return (
      <Layout>
        <Wrapper fullWidth={true}>
          <Helmet title={`Homepage | ${config.siteTitle}`} />
          <Header />
          <Homepage>
            <GridRow>
              <HomepageContent center={true}>
                <PreHeader>Hi, I'm Nico Domino</PreHeader>
                <HeaderText>I make shit for the web</HeaderText>
                <SubHeader>
                  I’m a Sys Admin and Web Developer at <a href="https://newtelco.dev">Newtelco</a>, a global managed services company
                  specializing in datacenter management based in Frankfurt, Germany. I occasionally write about my thoughts on tech and
                  other happenings here on my <Link to="/blog">blog</Link> and you can find some of my (much less) serious stuff on{' '}
                  <a href="https://twitter.com/ndom91">Twitter</a>.
                </SubHeader>
                <LinkWrapper>
                  <Link to="/contact">
                    <Button big={true}>
                      <svg viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
                        <path
                          fill-rule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Work
                    </Button>
                  </Link>
                  <Link to="/blog">
                    <Button big>
                      <svg viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
                        <path
                          fill-rule="evenodd"
                          d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Blog
                    </Button>
                  </Link>
                </LinkWrapper>
              </HomepageContent>
            </GridRow>
            {/* <GridRow>
              <HomepageContent>
                <h2>About Me</h2>
                <p>
                  Though I am a results-driven front-end developer by day who have converted inactive designs to fully interactive,
                  well-developed, accessible and standards-based user interfaces. I am completely enthusiast with a full stack environment
                  and passionate about JavaScript world.
                </p>
                <hr />
                <h2>Latest Blog</h2>
                {edges.map(post => (
                  <Article
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    excerpt={post.node.excerpt}
                    timeToRead={post.node.timeToRead}
                    slug={post.node.fields.slug}
                    category={post.node.frontmatter.category}
                    key={post.node.fields.slug}
                  />
                ))}
                <p className={'textRight'}>
                  <Link to={'/blog'}>All articles ({totalCount})</Link>
                </p>
              </HomepageContent>
            </GridRow> */}
          </Homepage>
        </Wrapper>
      </Layout>
    )
  }
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
