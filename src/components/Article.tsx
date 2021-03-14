import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { media } from '../utils/media'
import { titleCase, kebabCase } from '../utils/helpers'

interface Props {
  title: string
  date: string
  excerpt: string
  slug: string
  timeToRead: number
  category: string
}

const Post = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 3.5rem auto;
  @media ${media.large} {
    max-width: 65vw;
  }
  @media ${media.medium} {
    max-width: 75vw;
  }
  @media ${media.small} {
    max-width: 70vw;
    &:hover {
      & .post-initial {
        transform: scale(1.05) translate(-40%, -50%);
      }
    }
  }
  &:hover {
    & .post-initial {
      transform: scale(1.1) translate(-50%, -50%);
    }
  }
`

const Title = styled.h3`
  position: relative;
  font-family: var(--font-serif);
  margin-bottom: 0.75rem;
  font-size: 2.5rem;
  @media ${media.medium} {
    font-size: 2rem;
  }
  a {
    color: var(--grey-default);
  }
`

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  font-family: var(--font-serif);
  user-select: none;
  z-index: -1;
  transition: transform 250ms ease-in-out;

  @media ${media.medium} {
    font-size: 5rem;
  }
  @media ${media.small} {
    transform: translate(-45%, -50%);
  }
`

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: var(--font-sansSerif);
  line-height: 1.8rem;
  @media ${media.medium} {
  }
`

export const Article: React.FunctionComponent<Props> = (props) => {
  const { title, date, excerpt, slug, timeToRead, category } = props
  const firstChar = title.charAt(0)

  const list = {
    visible: {
      opacity: [0, 1],
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  }

  return (
    <motion.div animate="visible" variants={list}>
      <Post>
        <Title>
          <Initiale className="post-initial">{firstChar}</Initiale>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </Title>
        <div>
          {date && <span>{date}</span>}
          {timeToRead && <span> &mdash; {timeToRead} Min Read</span>}
          {category && (
            <>
              <span> &mdash; In</span>
              <Link style={{ color: 'var(--primary)', marginLeft: '5px' }} to={`/categories/${kebabCase(category)}`}>
                {titleCase(category)}
              </Link>
            </>
          )}
        </div>
        <Excerpt>{excerpt}</Excerpt>
      </Post>
    </motion.div>
  )
}
