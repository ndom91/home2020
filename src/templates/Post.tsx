import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
// @ts-ignore
import config from '../../config/SiteConfig'
import { DefaultPageProps } from '../models'
import { Link, graphql } from 'gatsby'
import { media, titleCase } from '../utils/media'
import { Layout, Header, Subline, SEO, PrevNext, ProgressBar } from '../components'
import '../utils/prismjs-theme.css'

const Wrapper: any = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  max-width: 1000px;
  padding: ${(props: any) => (props.fullWidth ? '0' : '0 10rem')};
  margin-bottom: 100px;
  @media ${media.large} {
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 8rem')};
  }
  @media ${media.medium} {
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 1.5rem')};
  }
  @media ${media.small} {
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 1rem')};
    margin-bottom: 50px;
  }
`

const PostContent = styled.div`
  max-width: 55vw;
  margin: 4rem auto 0 auto;
  @media ${media.large} {
    max-width: 65vw;
  }
  @media ${media.medium} {
    max-width: 75vw;
  }
  @media ${media.small} {
    max-width: 85vw;
  }
`

const ContentWrapper = styled.div`
  line-height: 1.8rem;
  padding: 5em 4em;
  margin: 0 auto;
`

const TagWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  @media ${media.medium} {
    flex-wrap: wrap;
  }
  @media ${media.small} {
    margin: 1rem;
  }
`
const Tag = styled.div`
  padding: 10px;
  border: 2px solid rgba(252, 103, 103, 0.2);
  border-radius: 10px;
  margin-left: 10px;
  width: auto;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: ease-in;
  padding: 8px 15px;
  font-family: ${config.serifFontFamily};
  font-display: swap;
  font-weight: 600;

  &:hover:before,
  &:focus:before,
  &:active:before {
    transform: scaleX(1);
  }
`

const Initiale = styled.span`
  position: absolute;
  font-size: 8rem;
  transform: translate(-50%, 50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
  font-family: ${config.serifFontFamily};
  transition: transform 250ms ease-in-out;
  font-weight: 700;
  @media ${media.small} {
    font-size: 6rem;
    transform: translate(-40%, 50%);
  }
`

const Title = styled.h1`
  font-weight: 600;
  font-family: ${config.serifFontFamily};
  font-size: calc(48px + 1vw);
  line-height: 3rem;
`

const PostPage: React.FunctionComponent<DefaultPageProps> = ({ pathContext, data }) => {
  const { prev, next, slug } = pathContext

  const post = data.markdownRemark

  if (!post) {
    return null
  }

  return (
    <Layout>
      <Header banner={post.frontmatter.banner}>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <SEO postNode={post} postSEO postPath={`/blog/${slug}`} />
      <Wrapper>
        {typeof document !== 'undefined' && <ProgressBar />}
        <ContentWrapper>
          <Initiale>{post.frontmatter.title.charAt(0)}</Initiale>
          <Title>{titleCase(post.frontmatter.title)}</Title>
          <Subline>
            {post.frontmatter.date} &mdash; {post.timeToRead} Min Read &mdash; In
            <Link style={{ marginLeft: '5px' }} to={`/categories/${kebabCase(post.frontmatter.category)}`}>
              {titleCase(post.frontmatter.category)}
            </Link>
          </Subline>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </ContentWrapper>
        {post.frontmatter.tags ? (
          <Subline>
            Tags: &#160;
            <TagWrapper>
              {post.frontmatter.tags.map((tag, i) => (
                <Link key={i} to={`/tags/${kebabCase(tag)}`}>
                  <Tag>
                    <strong>{tag}</strong>
                  </Tag>
                </Link>
              ))}
            </TagWrapper>
          </Subline>
        ) : null}
        <PrevNext prev={prev} next={next} />
      </Wrapper>
    </Layout>
  )
}

export default PostPage

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
        tags
      }
      timeToRead
    }
  }
`
