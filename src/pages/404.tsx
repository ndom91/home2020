import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
// @ts-ignore
import config from '../../config/SiteConfig'
import { Header, Layout, Wrapper } from '../components'

const Image = styled.img`
  width: 100%;
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
  font-family: var(--font-serif);
  font-display: swap;
  margin-bottom: 50px;
`

const NotFoundPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Helmet title={`Page Not Found | ${config.siteTitle}`} />
      <Header />
      <Wrapper>
        <ImageWrapper>
          <Image src="assets/images/404_1.png" alt="404 - Not Found" />
        </ImageWrapper>
        <Subtitle>You just hit a route that doesn't exist.. the sadness.</Subtitle>
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage
