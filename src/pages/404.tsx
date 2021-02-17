import * as React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
// @ts-ignore
import config from '../../config/SiteConfig'
import { Link } from 'gatsby'
import { Content, Header, Layout, Wrapper, SectionTitle } from '../components'

const HeaderText = styled.h1`
  text-align: center;
  font-size: 6rem;
  font-family: ${config.serifFontFamily};
  font-display: swap;
  margin-bottom: 20px;
`

const Image = styled.img`
  max-width: 900px;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Subtitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
  font-family: ${config.serifFontFamily};
  font-display: swap;
  margin-bottom: 50px;
`

const NotFoundPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Helmet title={`Page Not Found | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
        <SectionTitle>NOT FOUND</SectionTitle>
      </Header>
      <Wrapper>
        <Content>
          <ImageWrapper>
            <Image src="assets/images/404_1.png" alt="404 - Not Found" />
          </ImageWrapper>
          <Subtitle>You just hit a route that doesn't exist.. the sadness.</Subtitle>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage
