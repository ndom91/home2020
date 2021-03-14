import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Layout, Wrapper, Header, Project } from '../components'
import { motion } from 'framer-motion'
import { media } from '../utils/media'
import '../utils/prismjs-theme.css'

const AboutHeader = styled.h1`
  text-align: center;
  font-family: var(--font-serif);
  font-display: swap;
  font-size: 4rem;
  font-weight: 500;
  padding-bottom: 50px;
  max-width: 1400px;
  color: var(--gray-default);
  @media ${media.medium} {
    font-size: 3rem;
  }
`

const SubHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1400px;
  padding: 0 5em;
  @media ${media.medium} {
    flex-direction: column;
    align-items: center;
  }
`

const SubHeaderText = styled.div`
  font-size: 1.4rem;
  font-family: var(--font-sansSerif);
  font-display: swap;
  font-weight: 300;
  padding: 0 2em;
  line-height: 2.3rem;
  z-index: 2;
  @media ${media.medium} {
    font-size: 1.1rem;
  }
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: -10%;
    right: auto;
    bottom: auto;
    width: 300px;
    height: 420px;
    background-color: var(--primary);
    transform: translate(24px, 19px) rotate(-72deg);
    border-radius: 0px 80px;
    opacity: 0.08;
    pointer-events: none;
    @media ${media.medium} {
      left: calc(50% - 150px);
      top: 63%;
      width: 280px;
      height: 300px;
    }
    @media ${media.small} {
      left: calc(50% - 185px);
      top: 65%;
      width: 350px;
      height: 150px;
    }
  }
`

const HeaderImage = styled.div`
  min-width: 350px;
  border: 15px solid var(--primary);
  border-radius: 10px;
  transform: translateX(-10%);
  transition-property: transform scale rotate;
  transition-duration: 250ms;
  transition-timing-function: ease-out;
  z-index: 3;
  &:hover {
    transform: translateX(-10%) scale(1.05) rotate(-7deg);
  }
  @media ${media.medium} {
    max-width: 350px;
    min-width: unset;
    width: 100%;
    transform: none;
    margin: 10px 10px 140px 10px;
    &:hover {
      transform: scale(1.05) rotate(-7deg);
    }
  }
  @media ${media.small} {
    max-width: 250px;
    width: 90%;
    transform: none;
    margin-bottom: 50px;
    &:hover {
      transform: scale(1.05) rotate(-7deg);
    }
  }
`

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1400px;
  @media ${media.small} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const ProjectsHeader = styled.h1`
  margin-top: 80px;
  text-align: center;
  font-family: var(--font-serif);
  font-display: swap;
  font-size: 3.5rem;
  font-weight: 500;
  color: var(--grey-default);
  padding-bottom: 50px;
  @media ${media.medium} {
    font-size: 3rem;
  }
`

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2em;
  @media ${media.small} {
    flex-direction: column;
    align-items: center;
  }
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

const About: React.FunctionComponent = () => {
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
      <Header />
      <Wrapper fullWidth>
        <AboutHeader className="js-darkmode-flicker">Hey there.</AboutHeader>
        <SubHeader>
          <HeaderImage>
            <Img
              style={{ width: 'auto' }}
              fluid={images.find((img: ImageGraphQL) => img.node.fluid.originalName === 'ndo.png').node.fluid}
              fadeIn
              alt="ndom91"
            />
          </HeaderImage>
          <SubHeaderText>
            My name is Nico Domino and I am full stack web developer, improving the web one PR at a time! I am based in the city of
            Frankfurt, Germany. Below you can find some of my side projects / public work. I'm currently working at{' '}
            <a href="https://checklyhq.com">Checkly</a> making API and end to end application testing kick ass!
          </SubHeaderText>
        </SubHeader>
        <Projects>
          <ProjectsHeader className="js-darkmode-flicker">Projects</ProjectsHeader>
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
      </Wrapper>
    </Layout>
  )
}

export default About
