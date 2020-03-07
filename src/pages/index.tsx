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
  align-items: flex-end;
  padding: 4rem 8rem;
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
  /* text-align: ${(props: any) => (props.center ? 'center' : 'left')}; */
  text-align: left;
  font-size: 1.5rem;

  & h3 {
    font-size: 2rem;
  }
`

const PreHeader: any = styled.div`
  font-size: 1.2rem;
  font-family: ${config.serifFontFamily};
  color: ${theme.colors.primary};
`
const HeaderText: any = styled.h3`
  font-size: 2rem;
  color: ${theme.colors.grey.default};
`
const SubHeader: any = styled.div`
  font-size: 1.8rem;
  color: ${theme.colors.grey.light};
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
                <PreHeader>Hi. I'm Nico Domino</PreHeader>
                <HeaderText>...and I make shit for the web</HeaderText>
                <SubHeader>
                  I’m a Sys Admin and Web Developer at Newtelco, a full service datacenter management company in Frankfurt, Germany. I
                  occasionally write about my thoughts on tech and other happenings here on my blog and you can find some of my (much less)
                  serious stuff on Twitter.
                </SubHeader>
                {/* <Link to="/contact">
                  <Button big={true}>
                    <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
                    </svg>
                    Contact
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button big>
                    <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
                    </svg>
                    Blog
                  </Button>
                </Link> */}
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
