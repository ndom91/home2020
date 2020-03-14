import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Layout, Wrapper, Header, SectionTitle, Content } from '../components'
import '../utils/prismjs-theme.css'
import config from '../../config/SiteConfig'
import theme from '../../config/Theme'
import Project from '../components/Project'

const AboutHeader = styled.h1`
  text-align: center;
  font-family: ${config.serifFontFamily};
  font-size: 5rem;
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
  border-radius: 10px;
  transform: translateX(-20%);
`

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface Project {
  node: {
    name: string
    url: string
    image: string
    tech: []
    desc: string
  }
}

const About = () => {
  const { allProjectsJson } = useStaticQuery(
    graphql`
      query allProjectsQuery {
        allProjectsJson {
          edges {
            node {
              name
              tech
              url
              image
              desc
            }
          }
        }
      }
    `,
  )

  const projects = allProjectsJson.edges

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
            <HeaderImage src="assets/ndo2.jpg" />
            <SubHeaderText>
              My name is Nico Domino and I am a System Administrator by day, Web Developer by night. I am based in the (underrated) city of
              Frankfurt am Main, Germany and I've been building stuff on the web for the past 2-3 years.
            </SubHeaderText>
          </SubHeader>
          <Projects>
            {projects.map((project: Project, index: number) => {
              return <Project project={project} key={index} />
            })}
          </Projects>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default About
