import React from 'react'
import Helmet from 'react-helmet'
import kebabCase from 'lodash/kebabCase'
// @ts-ignore
import config from '../../config/SiteConfig'
import { DefaultPageProps } from '../models'
import { Link } from 'gatsby'
import { Layout, Wrapper, Header, SectionTitle, Title } from '../components'

const AllTagTemplate: React.FunctionComponent<DefaultPageProps> = ({ pathContext }) => {
  const { tags } = pathContext
  if (tags) {
    return (
      <Layout>
        <Helmet title={`Tags | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Wrapper>
          <SectionTitle>Tags</SectionTitle>
          {tags.map((tag, index: number) => (
            <Title key={index}>
              <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
            </Title>
          ))}
        </Wrapper>
      </Layout>
    )
  } else {
    return <div>No Tags</div>
  }
}

export default AllTagTemplate
