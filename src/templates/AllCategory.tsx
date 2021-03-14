import React from 'react'
import Helmet from 'react-helmet'
import kebabCase from 'lodash/kebabCase'
// @ts-ignore
import config from '../../config/SiteConfig'
import { Link } from 'gatsby'
import { DefaultPageProps } from '../models'
import { titleCase } from '../utils/helpers'
import { Layout, Wrapper, Header, SectionTitle, Title } from '../components'

const AllCategoryTemplate: React.FunctionComponent<DefaultPageProps> = ({ pathContext }) => {
  const { categories } = pathContext
  if (categories) {
    return (
      <Layout>
        <Helmet title={`Categories | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Wrapper>
          <SectionTitle>Categories</SectionTitle>
          {categories.map((category, index: number) => (
            <Title key={index}>
              <Link to={`/categories/${kebabCase(category)}`}>{titleCase(category)}</Link>
            </Title>
          ))}
        </Wrapper>
      </Layout>
    )
  } else {
    return <div>No Category</div>
  }
}

export default AllCategoryTemplate
