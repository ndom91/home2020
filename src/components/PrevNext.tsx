import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Post } from '../models'
import { media } from '../utils/media'
import { kebabCase } from '../utils/helpers'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  position: relative;
  justify-content: space-between;
  margin: 6rem auto 20px auto;

  @media ${media.small} {
    flex-direction: column;
    transform: translateY(-4rem);
  }

  a {
    color: var(--primary);
    display: flex;
    align-items: center;
  }
`

const Prev = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 3;
  background-color: var(--secondary-bg);
  border-radius: 15px;
  padding: 20px 30px;
  box-shadow: 0 2px 10px var(--grey-lightest);
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;
  font-family: var(--font-serif);
  font-weight: 600;

  @media ${media.medium} {
    width: 100%;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 20px rgba(252, 103, 103, 0.15);
  }
  span {
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--grey-light);
  }
`

const Next = styled.div`
  display: flex;
  text-align: right;
  flex-direction: column;
  align-items: flex-end;
  z-index: 3;
  background-color: var(--secondary-bg);
  border-radius: 15px;
  padding: 20px 30px;
  box-shadow: 0 2px 10px var(--grey-lightest);
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;
  font-family: var(--font-serif);
  font-weight: 600;

  @media ${media.medium} {
    width: 100%;
    margin-top: 10px;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 20px rgba(252, 103, 103, 0.15);
  }
  span {
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--grey-light);
  }
`

const ArrowPrev = styled.svg`
  position: absolute;
  opacity: 0.5;
  top: -65px;
  left: -45px;
  width: 128px;
  z-index: -1;
  @media ${media.medium} {
    top: 15px;
    left: -55px;
  }
`
const ArrowNext = styled.svg`
  position: absolute;
  opacity: 0.5;
  top: -65px;
  right: -45px;
  width: 128px;
  z-index: -1;
  @media ${media.medium} {
    top: 15px;
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
          <Link to={`/blog/${kebabCase(prev.frontmatter.title)}`} style={{ padding: '0 2em' }}>
            <Prev>
              <span>Previous</span>
              {prev.frontmatter.title}
            </Prev>
          </Link>
          <ArrowPrev viewBox="0 0 20 20" fill={'var(--grey-lightest)'}>
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
          <Link to={`/blog/${kebabCase(next.frontmatter.title)}`} style={{ padding: '0 2em' }}>
            <Next>
              <span>Next</span>
              {next.frontmatter.title}
            </Next>
          </Link>
          <ArrowNext viewBox="0 0 20 20" fill={'var(--grey-lightest)'}>
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
