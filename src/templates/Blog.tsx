import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
// @ts-ignore
import config from '../../config/SiteConfig'
import { motion } from 'framer-motion'
import { DefaultPageProps } from '../models'
import { Layout, Article, Wrapper, Header, Pagination } from '../components'

const BlogHeader = styled.h1`
  font-family: var(--font-serif);
  color: var(--grey-default);
  font-size: 4rem;
  text-align: center;
`

const BlogPage: React.FunctionComponent<DefaultPageProps> = ({ pageContext, data }) => {
  const { currentPage, totalPages } = pageContext
  const { edges } = data.allMarkdownRemark

  const list = {
    visible: {
      opacity: [0, 1],
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  }

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <Header />
      <Wrapper>
        <BlogHeader className="js-darkmode-flicker">Blog</BlogHeader>
        <motion.div animate="visible" variants={list}>
          {edges.map(
            (post) =>
              post.node.frontmatter.title !== '' && (
                <Article
                  title={post.node.frontmatter.title}
                  date={post.node.frontmatter.date}
                  excerpt={post.node.excerpt}
                  timeToRead={post.node.timeToRead}
                  slug={post.node.fields.slug}
                  category={post.node.frontmatter.category}
                  key={post.node.fields.slug}
                />
              ),
          )}
        </motion.div>
        <Pagination currentPage={currentPage} totalPages={totalPages} url={'blog'} />
      </Wrapper>
    </Layout>
  )
}
export const BlogQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
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
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`

export default BlogPage
