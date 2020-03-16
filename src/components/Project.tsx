import React from 'react'
import styled from 'styled-components'
import theme from '../../config/Theme'
import { media } from '../utils/media'
import config from '../../config/SiteConfig'
import Img from 'gatsby-image'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

const ProjectCard = styled.div`
  border: 1px solid ${theme.colors.grey.ultraUltraLight};
  border-radius: 10px;
  position: relative;
  background: #fff;
  margin: 75px 0;
  padding: 10px;
  width: 370px;
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;
  transform-style: preserve-3d;

  &:hover {
    /* transform: translateY(-5px); */
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  @media ${media.medium} {
    width: 90%;
    margin: 150px auto;
  }
  border: none;
  box-shadow: 0 1px 10px ${theme.colors.primary};
  /* border-radius: 50px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff; */

  border-radius: 50px;
  background: #ffffff;
  box-shadow: inset -20px 20px 60px #d9d9d9, inset 20px -20px 60px #ffffff;
`

const ProjectSquareLeft = styled.div`
  background-color: ${theme.colors.primary};
  position: absolute;
  height: 300px;
  width: 300px;
  transform: translate3d(0, 0, -1rem);
  top: -15px;
  left: -15px;
  border-radius: 10px 0 0 0;
  @media ${media.medium} {
    width: 200px;
    height: 200px;
  }
  display: none;
`
const ProjectSquareRight = styled.div`
  background-color: ${theme.colors.primary};
  position: absolute;
  height: 300px;
  width: 300px;
  transform: translate3d(0, 0, -1rem);
  bottom: -15px;
  right: -15px;
  border-radius: 0 0 10px 0;
  @media ${media.medium} {
    width: 200px;
    height: 200px;
  }
  display: none;
`

const ProjectTechWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const ProjectTech = styled.img`
  width: 48px;

  @media ${media.medium} {
    width: 48px;
    height: 48px;
  }
  @media ${media.small} {
    width: 32px;
    height: 32px;
  }
`

const ProjectDetails = styled.div`
  /* width: 100%; */
  padding: 40px;
  background: ${theme.colors.grey.ultraUltraLight};
  border-radius: 0 0 10px 10px;
  font-family: ${config.sanSerifFontFamily};
  font-weight: 400;

  margin: 20px;
  border-radius: 50px;
  background: linear-gradient(225deg, #ffffff, #e6e6e6);
  box-shadow: -20px 20px 60px #d9d9d9, 20px -20px 60px #ffffff;

  &:before {
    position: absolute;
    width: 100%;
    height: 20px;
    background-color: linear-gradient(to top, #ececec, rgba(0, 0, 0, 0));
  }
`

const ProjectScreenshot = styled.img`
  margin: 20px;
  padding: 20px;
  /* background-color: ${theme.colors.grey.ultraUltraLight}; */
  background-color: rgba(0,0,0,0.05);
  border-radius: 15px;
  margin-top: 30px;
  width: 90%;

  @media ${media.medium} {
    width: calc(100% - 40px);
  }
`

const ProjectLabel = styled.h3`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 250ms;
  padding: 5px;
  font-family: ${config.serifFontFamily};
  font-weight: 600;
  font-size: 1.3rem;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0px;
    bottom: 0;
    background: ${theme.colors.primary};
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition-property: transform;
    transition-duration: 250ms;
    transition-timing-function: ease-out;
  }

  &:hover,
  &:focus,
  &:active {
    color: white;
  }

  &:hover .project__label--link {
    fill: #fff;
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    transform: scaleX(1);
  }
  @media ${media.medium} {
    max-width: 97%;
    font-size: 1.2rem;
  }
`
const ProjectLabelLink = styled.svg`
  width: 32px;
  stroke: none;
  fill: ${theme.colors.primary};
  display: inline-block;
  transition: stroke 150ms ease-in;
  position: absolute;
  bottom: 5px;
  right: -32px;

  &:hover,
  &:focus,
  &:active {
    color: white;
  }
  @media ${media.medium} {
    width: 24px;
    bottom: 3px;
    right: -26px;
  }
`

const ProjectDesc = styled.div`
  font-size: 1rem;
  font-weight: 100;
  color: ${theme.colors.grey.default};
  @media ${media.medium} {
    font-size: 0.9rem;
  }
`

const ImgWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  /* background-color: ${theme.colors.grey.ultraUltraLight}; */
  background-color: rgba(0,0,0,0.05);
  border-radius: 15px;
  margin-top: 30px;
`

interface ProjectProps {
  project: {
    node: {
      name: string
      url: string
      image: string
      tech: []
      desc: string
    }
  }
  image: {
    node: {
      fluid: {
        base64: string
        aspectRatio: number
        src: string
        srcSet: string
        sizes: string
      }
    }
  }
}

const Project: React.SFC<ProjectProps> = props => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      x: [-50, 0],
      opacity: [0, 1],
      transition: {
        x: { stiffness: 1000, velocity: -100 },
        duration: 0.3,
      },
    },
  }
  return (
    <motion.div initial="hidden" variants={variants} whileHover={{ scale: 1.1 }}>
      <Tilt tiltReverse transitionSpeed={1900}>
        <ProjectCard>
          <ProjectSquareLeft />
          {props.image ? (
            <ImgWrapper>
              <Img fluid={props.image.node.fluid} fadeIn alt={`Screenshot ${props.project.node.name}`} />
            </ImgWrapper>
          ) : (
            <ProjectScreenshot
              src={`assets/images/screenshots/${props.project.node.image}`}
              alt={`Screenshot ${props.project.node.name}`}
            />
          )}
          <ProjectTechWrapper>
            {props.project.node.tech &&
              props.project.node.tech.map(tech => (
                <ProjectTech
                  height="64"
                  className="project__tech"
                  src={`assets/images/tech/${tech}.svg`}
                  key={tech}
                  alt={tech}
                  title={tech}
                />
              ))}
          </ProjectTechWrapper>
          <ProjectDetails className="project__details">
            <a target="_blank" rel="noopener noreferrer" href={props.project.node.url}>
              <ProjectLabel>
                {props.project.node.name}
                {/* <ProjectLabelLink className="project__label--link" height="32" width="32" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </ProjectLabelLink> */}
              </ProjectLabel>
              <ProjectDesc className="project__desc">{props.project.node.desc}</ProjectDesc>
            </a>
          </ProjectDetails>
          <ProjectSquareRight />
        </ProjectCard>
      </Tilt>
    </motion.div>
  )
}

export default Project
