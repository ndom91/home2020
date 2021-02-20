import React from 'react'
import Helmet from 'react-helmet'
import kebabCase from 'lodash/kebabCase'
// @ts-ignore
import config from '../../config/SiteConfig'
import { DefaultPageProps } from '../models'
import { Link } from 'gatsby'
import { titleCase } from '../utils/media'
import { Layout, Wrapper, Header, SectionTitle, Title } from '../components'

export default class AllCategoryTemplate extends React.PureComponent<DefaultPageProps> {
  public render() {
    const { categories } = this.props.pathContext
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
    }
  }
}
