import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Layout, Wrapper, Header, SectionTitle, Content } from '../components'
import '../utils/prismjs-theme.css'
import config from '../../config/SiteConfig'
import theme from '../../config/Theme'
import Project from '../components/Project'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import { media } from '../utils/media'

const AboutHeader = styled.h1`
  text-align: center;
  font-family: ${config.serifFontFamily};
  font-size: 4.5rem;
  font-weight: 500;
  padding-bottom: 50px;
  @media ${media.medium} {
    font-size: 3rem;
  }
`

const SubHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media ${media.medium} {
    flex-direction: column;
    align-items: center;
  }
`

const SubHeaderText = styled.div`
  font-size: 1.7rem;
  font-family: ${config.sanSerifFontFamily};
  font-weight: 300;
  @media ${media.medium} {
    font-size: 1.1rem;
  }
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: -10%;
    right: auto;
    bottom: auto;
    z-index: 1;
    width: 300px;
    height: 420px;
    background-color: ${theme.colors.primary};
    transform: translate(24px, 19px) rotate(-72deg);
    border-radius: 0px 80px;
    opacity: 0.1;
    @media ${media.medium} {
      left: 21%;
      top: 65%;
      width: 200px;
      height: 300px;
    }
    @media ${media.small} {
      left: -45%;
      top: 60%;
      width: 350px;
      height: 150px;
    }
  }
`

const HeaderImage = styled.div`
  min-width: 400px;
  border: 15px solid ${theme.colors.primary};
  border-radius: 10px;
  transform: translateX(-20%);
  /* transition: translate 250ms ease-in-out scale 250ms ease-in-out rotate 250ms ease-in-out; */
  transition-property: transform scale rotate;
  transition-duration: 250ms;
  transition-timing-function: ease-out;
  &:hover {
    transform: translateX(-20%) scale(1.05) rotate(-7deg);
  }
  @media ${media.medium} {
    min-width: unset;
    width: 100%;
    transform: none;
    margin: 10px 10px 140px 10px;
  }
  @media ${media.small} {
    width: 110%;
    transform: none;
    margin-bottom: 50px;
  }
`

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`

const ProjectsHeader = styled.h1`
  margin-top: 80px;
  text-align: center;
  font-family: ${config.serifFontFamily};
  font-size: 3.5rem;
  font-weight: 500;
  padding-bottom: 50px;
  @media ${media.medium} {
    font-size: 3rem;
  }
`

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
  const { allProjectsJson, allImageSharp } = useStaticQuery(
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
        allImageSharp {
          edges {
            node {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `,
  )

  const projects = allProjectsJson.edges
  const images = allImageSharp.edges
  const list = {
    visible: {
      opacity: [0, 1],
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

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
            <HeaderImage>
              <Img
                style={{ width: 'auto' }}
                fluid={images.find(img => img.node.fluid.originalName === 'ndo2.jpg').node.fluid}
                fadeIn
                alt="ndom91"
              />
            </HeaderImage>
            <SubHeaderText>
              My name is Nico Domino and I am a System Administrator by day, Web Developer by night. I am based in the city of Frankfurt am
              Main, Germany{` `}
              and I've been building stuff on the web for the past 2-3 years.
            </SubHeaderText>
          </SubHeader>
          <Projects>
            <ProjectsHeader>Projects</ProjectsHeader>
            <motion.div initial animate="visible" variants={list}>
              <ProjectsWrapper>
                {projects.map((project: Project, index: number) => {
                  return (
                    <Project project={project} image={images.find(img => img.node.fluid.originalName === project.node.image)} key={index} />
                  )
                })}
              </ProjectsWrapper>
            </motion.div>
          </Projects>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default About
