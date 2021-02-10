import React from 'react'
import Helmet from 'react-helmet'
import kebabCase from 'lodash/kebabCase'
// @ts-ignore
import config from '../../config/SiteConfig'
import { DefaultPageProps } from '../models'
import { Link } from 'gatsby'
import { Layout, Wrapper, Header, SectionTitle, Content, Title } from '../components'

export default class AllTagTemplate extends React.PureComponent<DefaultPageProps> {
  public render() {
    const { tags } = this.props.pathContext
    if (tags) {
      return (
        <Layout>
          <Helmet title={`Tags | ${config.siteTitle}`} />
          <Header>
            <Link to="/">{config.siteTitle}</Link>
            <SectionTitle>Tags</SectionTitle>
          </Header>
          <Wrapper>
            <Content>
              {tags.map((tag, index: number) => (
                <Title key={index}>
                  <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
                </Title>
              ))}
            </Content>
          </Wrapper>
        </Layout>
      )
    }
  }
}
