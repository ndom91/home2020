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

const HeaderImage = styled.div`
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

const LocationIcon = styled.div`
  display: block;
  margin: 0 7px;
  transition: transform 150ms ease-in-out;
  display: inline-block;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  vertical-align: middle;
  transition-duration: 0.3s;
  transition-property: transform;

  &:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 6px;
    width: 90%;
    opacity: 0;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
    transition-duration: 0.3s;
    transition-property: transform, opacity;
  }
  &:hover,
  &:focus,
  &:active {
    transform: translateY(-3px);
    cursor: pointer;
  }
  &:hover:before,
  &:focus:before,
  &:active:before {
    opacity: 1;
    transform: translateY(-5px);
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
                style={{ width: '400px' }}
                fluid={images.find(img => img.node.fluid.originalName === 'ndo2.jpg').node.fluid}
                fadeIn
                alt="ndom91"
              />
            </HeaderImage>
            <SubHeaderText>
              My name is Nico Domino and I am a System Administrator by day, Web Developer by night. I am based in the city of Frankfurt am
              Main, Germany
              <LocationIcon>
                <a
                  href="https://www.google.com/maps/place/Frankfurt/@50.121212,8.6365638,11z"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Google Maps - Frankfurt am Main"
                >
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={theme.colors.primary}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              </LocationIcon>
              and I've been building stuff on the web for the past 2-3 years.
            </SubHeaderText>
          </SubHeader>
          <Projects>
            <motion.div initial animate="visible" variants={list}>
              {projects.map((project: Project, index: number) => {
                return (
                  <Project project={project} image={images.find(img => img.node.fluid.originalName === project.node.image)} key={index} />
                )
              })}
            </motion.div>
          </Projects>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default About
