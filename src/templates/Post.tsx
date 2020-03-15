import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { Layout, Wrapper, Header, Subline, SEO, PrevNext, SectionTitle, Content } from '../components'
import config from '../../config/SiteConfig'
import '../utils/prismjs-theme.css'
import PathContext from '../models/PathContext'
import Post from '../models/Post'
import { motion, useViewportScroll, useSpring, useTransform } from 'framer-motion'

const PostContent = styled.div`
  margin-top: 4rem;
`

const Position = styled.svg`
  position: fixed;
  top: 220px;
  left: 10px;
  width: 120px;
  height: 120px;
  z-index: 9999;
`

const TagWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
const Tag = styled.div`
  padding: 10px 15px;
  border: 2px solid rgba(252, 103, 103, 0.2);
  border-radius: 15px;
  margin-right: 10px;
  width: auto;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: ease-in;
  padding: 8px 15px;
  font-family: ${config.serifFontFamily};
  font-weight: 600;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 1px 15px rgba(252, 103, 103, 0.3);
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    transform: scaleX(1);
  }
`

interface Props {
  data: {
    markdownRemark: Post
  }
  pathContext: PathContext
}

const PostPage: React.SFC<Props> = props => {
  const { prev, next } = props.pathContext
  const [isComplete, setIsComplete] = useState(false)
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange])

  const post = props.data.markdownRemark
  return (
    <Layout>
      {post ? (
        <>
          <SEO postPath={post.fields.slug} postNode={post} postSEO />
          <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
          <Header banner={post.frontmatter.banner}>
            <Link to="/">{config.siteTitle}</Link>
            <SectionTitle>{post.frontmatter.title}</SectionTitle>
            <Subline light={true}>
              {post.frontmatter.date} &mdash; {post.timeToRead} Min Read &mdash; In{' '}
              <Link to={`/categories/${kebabCase(post.frontmatter.category)}`}>{post.frontmatter.category}</Link>
            </Subline>
          </Header>
          <Wrapper>
            {/* <PositionWrapper> */}
            <Position viewBox="0 0 60 60">
              <motion.path
                fill="none"
                strokeWidth="5"
                stroke="black"
                strokeDasharray="0 1"
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{
                  pathLength,
                  rotate: 90,
                  translateX: 5,
                  translateY: 5,
                  scaleX: -1,
                }}
              />
              <motion.path
                fill="none"
                strokeWidth="5"
                stroke="black"
                d="M14,26 L 22,33 L 35,16"
                initial={false}
                strokeDasharray="0 1"
                animate={{ pathLength: isComplete ? 1 : 0 }}
              />
            </Position>
            <Content>
              <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
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
            </Content>
          </Wrapper>
        </>
      ) : null}
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
