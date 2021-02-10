import React from 'react'
import styled from 'styled-components'
import theme from '../../config/Theme'
import Helmet from 'react-helmet'
// @ts-ignore
import config from '../../config/SiteConfig'
import { DefaultPageProps } from '../models'
import { motion } from 'framer-motion'
import { Link, graphql } from 'gatsby'
import { Layout, Article, Wrapper, SectionTitle, Header, Content, Pagination } from '../components'

const BlogHeader = styled.h1`
  font-family: ${config.serifFontFamily};
  font-display: swap;
  font-size: 4rem;
  font-display: swap;
  color: ${theme.colors.grey.default};
  text-align: center;
  padding-bottom: 50px;
`

const BlogPage: React.FunctionComponent<DefaultPageProps> = ({ pageContext, data }) => {
  const { currentPage, totalPages } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

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
      <Header>
        <Link to="/">{config.siteTitle}</Link>
        <SectionTitle uppercase={true}>Latest stories ({totalCount})</SectionTitle>
      </Header>
      <Wrapper>
        <Content>
          <BlogHeader>Blog</BlogHeader>
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
        </Content>
      </Wrapper>
    </Layout>
  )
}
export const BlogQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
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
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`

export default BlogPage
