import React from 'react'
import { Link } from 'gatsby'
import { DefaultPageProps } from '../models'
import { Article, Header, Layout, SectionTitle, Subline, Wrapper } from '../components'
import Helmet from 'react-helmet'
// @ts-ignore
import config from '../../config/SiteConfig'
import kebabCase from 'lodash/kebabCase'

const TagTemplate: React.FunctionComponent<DefaultPageProps> = ({ pathContext }) => {
  const { posts, tagName } = pathContext
  const totalCount = posts ? posts.length : 0
  const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tagName}"`

  return (
    <Layout>
      <Helmet title={`${'Tags'} | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Wrapper>
        <SectionTitle>Tag - {tagName}</SectionTitle>
        <Subline sectionTitle>
          {subline} (See{' '}
          <Link style={{ marginLeft: '5px' }} to="/tags">
            all tags
          </Link>
          )
        </Subline>
        {posts
          ? posts.map((post: any, index) => (
              <Article
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                excerpt={post.excerpt}
                slug={kebabCase(post.frontmatter.title)}
                timeToRead={post.timeToRead}
                category={post.frontmatter.category}
                key={index}
              />
            ))
          : null}
      </Wrapper>
    </Layout>
  )
}

export default TagTemplate
