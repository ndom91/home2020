import * as React from 'react'
import styled from 'styled-components'
import { Content, Header, Layout, Wrapper, SectionTitle } from '../components'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import { Link } from 'gatsby'

const HeaderText = styled.h1`
  text-align: center;
  font-size: 6rem;
  font-family: ${config.serifFontFamily};
  font-display: swap;
  margin-bottom: 20px;
`

const Image = styled.img`
  max-width: 600px;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 75px 0;
`

const Subtitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
  font-family: ${config.serifFontFamily};
  font-display: swap;
  margin-bottom: 50px;
`

export default class NotFoundPage extends React.Component<any> {
  public render() {
    return (
      <Layout>
        <Helmet title={`404 not found | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
          <SectionTitle>NOT FOUND</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
            <HeaderText>404</HeaderText>
            <ImageWrapper>
              <Image src="assets/images/404.svg" alt="404 - Not Found" />
            </ImageWrapper>
            <Subtitle>You just hit a route that doesn&#39;t exist... the sadness.</Subtitle>
          </Content>
        </Wrapper>
      </Layout>
    )
  }
}
