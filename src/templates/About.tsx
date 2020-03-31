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
  font-display: swap;
  font-size: 4rem;
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
  font-size: 1.4rem;
  font-family: ${config.sanSerifFontFamily};
  font-display: swap;
  font-weight: 300;
  padding: 0 2em;
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
      left: 0%;
      top: 70%;
      width: 300px;
      height: 150px;
    }
  }
`

const HeaderImage = styled.div`
  min-width: 350px;
  border: 15px solid ${theme.colors.primary};
  border-radius: 10px;
  transform: translateX(-10%);
  transition-property: transform scale rotate;
  transition-duration: 250ms;
  transition-timing-function: ease-out;
  &:hover {
    transform: translateX(-10%) scale(1.05) rotate(-7deg);
  }
  @media ${media.medium} {
    min-width: unset;
    width: 100%;
    transform: none;
    margin: 10px 10px 140px 10px;
  }
  @media ${media.small} {
    width: 90%;
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
  font-display: swap;
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

interface ImageGraphQL {
  node: {
    fluid: {
      originalName: string
    }
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
                fluid={images.find((img: ImageGraphQL) => img.node.fluid.originalName === 'ndo2.jpg').node.fluid}
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
                    <Project
                      project={project}
                      image={images.find((img: ImageGraphQL) => img.node.fluid.originalName === project.node.image)}
                      key={index}
                    />
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
