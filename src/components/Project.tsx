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

  border: none;

  border-radius: 50px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

  &:hover {
    box-shadow: 0 3px 40px rgba(0, 0, 0, 0.2);
  }
  @media ${media.medium} {
    width: 90%;
    margin: 100px auto;
  }
  @media ${media.small} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin: 100px auto;
  }
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
  padding: 40px;
  border-radius: 0 0 10px 10px;
  font-family: ${config.sanSerifFontFamily};
  font-display: swap;
  font-weight: 400;

  margin: 20px;
  border-radius: 50px;
  box-shadow: -20px 20px 60px #d9d9d9, 20px -20px 60px #ffffff;

  margin-top: 0px;
  padding-top: 20px;
  transform: translateZ(10px);
  transform-style: preserve-3d;

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
  background-color: rgba(0, 0, 0, 0.05);
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
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 250ms;
  padding: 5px;
  font-family: ${config.serifFontFamily};
  font-display: swap;
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

const ProjectDesc = styled.div`
  font-size: 1rem;
  font-weight: 100;
  color: ${theme.colors.grey.default};
  @media ${media.medium} {
    font-size: 0.9rem;
  }
  @media ${media.medium} {
    font-size: 1rem;
  }
`

const ImgWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.05);
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
    <motion.div initial="hidden" variants={variants} whileHover={{ scale: 1.05 }}>
      <Tilt tiltReverse perspective={500} tiltMaxAngleX={3} tiltMaxAngleY={3} transitionSpeed={1900}>
        <ProjectCard>
          {props.image ? (
            <ImgWrapper>
              <Img fluid={props.image.node.fluid} fadeIn alt={`Screenshot ${props.project.node.name}`} />
            </ImgWrapper>
          ) : (
            <ProjectScreenshot
              src={`/assets/images/screenshots/${props.project.node.image}`}
              alt={`Screenshot ${props.project.node.name}`}
            />
          )}
          <ProjectTechWrapper>
            {props.project.node.tech &&
              props.project.node.tech.map(tech => (
                <ProjectTech
                  height="64"
                  className="project__tech"
                  src={`/assets/images/tech/${tech}.svg`}
                  key={tech}
                  alt={tech}
                  title={tech}
                />
              ))}
          </ProjectTechWrapper>
          <ProjectDetails className="project__details">
            <a target="_blank" rel="noopener noreferrer" href={props.project.node.url}>
              <ProjectLabel>{props.project.node.name}</ProjectLabel>
              <ProjectDesc className="project__desc" dangerouslySetInnerHTML={{ __html: props.project.node.desc }} />
            </a>
          </ProjectDetails>
        </ProjectCard>
      </Tilt>
    </motion.div>
  )
}

export default Project
