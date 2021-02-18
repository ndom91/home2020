import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
// @ts-ignore
import config from '../../config/SiteConfig'
import kebabCase from 'lodash/kebabCase'
import theme from '../../config/Theme'
import { motion } from 'framer-motion'
import { media, titleCase } from '../utils/media'

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
    max-width: 85vw;
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

const Title = styled.h2`
  position: relative;
  font-family: ${config.serifFontFamily};
  margin-bottom: 0.75rem;
  font-size: 2rem;
  color: var(--grey-default);
  @media ${media.medium} {
    font-size: 2rem;
  }
`

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  font-family: ${config.serifFontFamily};
  user-select: none;
  z-index: -1;
  transition: transform 250ms ease-in-out;

  @media ${media.medium} {
    font-size: 5rem;
  }
  @media ${media.small} {
    transform: translate(-30%, -50%);
  }
`

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
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
          {date && <span>{date} &mdash;</span>}
          {timeToRead && (
            <span>
              {' '}
              {` `}
              {timeToRead} Min Read
            </span>
          )}

          {category && (
            <>
              <span>&mdash; In </span>
              <Link style={{ color: theme.colors.primary, marginLeft: '5px' }} to={`/categories/${kebabCase(category)}`}>
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
