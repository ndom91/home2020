import React from 'react'
import styled from 'styled-components'
import theme from '../../config/Theme'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { Post } from '../models'
import { media } from '../utils/media'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin: 6rem auto 0 auto;
  height: 60px;
  margin-bottom: 20px;
  a {
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
  }
  justify-content: space-between;
  @media ${media.medium} {
    flex-direction: column;
    transform: translateY(-4rem);
  }
  @media ${media.small} {
    margin: 6rem 2rem;
  }
`

const Prev = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 3;
  background-color: white;
  border-radius: 15px;
  padding: 10px 30px;
  box-shadow: 0 2px 10px ${(props) => props.theme.colors.grey.ultraUltraLight};
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.grey.light};
  }
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 20px rgba(252, 103, 103, 0.15);
  }
  @media ${media.medium} {
    width: 100%;
    padding: 10px 20px;
  }
`

const Next = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 3;
  background-color: white;
  border-radius: 15px;
  padding: 10px 30px;
  box-shadow: 0 2px 10px ${(props) => props.theme.colors.grey.ultraUltraLight};
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.grey.light};
  }
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 20px rgba(252, 103, 103, 0.15);
  }
  @media ${media.medium} {
    width: 100%;
    margin-top: 10px;
    padding: 10px 20px;
  }
`

const ArrowPrev = styled.svg`
  position: absolute;
  opacity: 0.5;
  top: -65px;
  left: -75px;
  width: 128px;
  z-index: -1;
  @media ${media.medium} {
    top: 10px;
    left: -55px;
  }
`
const ArrowNext = styled.svg`
  position: absolute;
  opacity: 0.5;
  top: -65px;
  right: -75px;
  width: 128px;
  z-index: -1;
  @media ${media.medium} {
    top: 10px;
    right: -55px;
  }
`

interface Props {
  next: Post
  prev: Post
}

export const PrevNext: React.FunctionComponent<Props> = (props) => {
  const { prev, next } = props
  return (
    <Wrapper>
      {prev && (
        <>
          <Link to={`/blog/${kebabCase(prev.frontmatter.title)}`}>
            <Prev>
              <span>Previous</span>
              {prev.frontmatter.title}
            </Prev>
          </Link>
          <ArrowPrev viewBox="0 0 20 20" fill={theme.colors.grey.ultraUltraLight}>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            />
          </ArrowPrev>
          <svg viewBox="0 0 20 20" fill="currentColor" />
        </>
      )}
      {next && (
        <>
          <Link to={`/blog/${kebabCase(next.frontmatter.title)}`}>
            <Next>
              <span>Next</span>
              {next.frontmatter.title}
            </Next>
          </Link>
          <ArrowNext viewBox="0 0 20 20" fill={theme.colors.grey.ultraUltraLight}>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </ArrowNext>
        </>
      )}
    </Wrapper>
  )
}
