import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Layout, Wrapper, Header, SectionTitle, Content } from '../components'
import '../utils/prismjs-theme.css'
import config from '../../config/SiteConfig'
import theme from '../../config/Theme'
import ndo from '../../static/assets/ndo2.jpg'

const AboutHeader = styled.h1`
  text-align: center;
  font-family: ${config.serifFontFamily};
  font-weight: 500;
  padding-bottom: 50px;
`

const SubHeader = styled.div`
  display: flex;
  align-items: center;
`

const SubHeaderText = styled.div`
  font-size: 1.7rem;
  font-family: ${config.sanSerifFontFamily};
  font-weight: 300;
`

const HeaderImage = styled.img`
  width: 450px;
  border: 15px solid ${theme.colors.primary};
  border-radius: 5px;
  transform: translateX(-20%);
`

export default class PostPage extends React.PureComponent<Props> {
  public render() {
    return (
      <Layout>
        <Helmet title={'About'} />
        <Header>
          <SectionTitle>About</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
            <AboutHeader>Hey there.</AboutHeader>
            <SubHeader>
              <HeaderImage src={ndo} />
              <SubHeaderText>
                My name is Nico Domino and I am a System Administrator by day, Web Developer by night. I am based in the (underrated) city
                of Frankfurt am Main, Germany and I've been building stuff on the web for the past 2-3 years.
              </SubHeaderText>
            </SubHeader>
          </Content>
        </Wrapper>
      </Layout>
    )
  }
}
