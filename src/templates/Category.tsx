import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import kebabCase from 'lodash/kebabCase'
import { PageProps } from '../models'
import { titleCase } from '../utils/media'
import { Link } from 'gatsby'
import { Layout, Wrapper, Header, Subline, Article, SectionTitle, Content } from '../components'

export default class Category extends React.PureComponent<PageProps> {
  public render() {
    const { posts, categoryName } = this.props.pathContext
    const totalCount = posts ? posts.length : 0
    const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with #${titleCase(categoryName).replace(/ /g, '')}`

    return (
      <Layout>
        <Helmet title={`${titleCase(categoryName)} | ${config.siteTitle}`} />
        <Header />
        <Wrapper>
          <Content>
            <SectionTitle>Category &ndash; {titleCase(categoryName)}</SectionTitle>
            <Subline sectionTitle>
              {subline} (See{' '}
              <Link style={{ marginLeft: '5px' }} to="/categories">
                all categories
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
          </Content>
        </Wrapper>
      </Layout>
    )
  }
}
