import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { Subline } from './Subline'
import theme from '../../config/Theme'
import { motion } from 'framer-motion'
import { media } from '../utils/media'

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  @media ${media.medium} {
    font-size: 1.2rem;
  }
`

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
  @media ${media.medium} {
    font-size: 5rem;
  }
`

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media ${media.medium} {
    font-size: 1rem;
  }
`

interface Props {
  title: string
  date: string
  excerpt: string
  slug: string
  timeToRead: number
  category: string
}

// export class Article extends React.PureComponent<Props> {
export const Article: React.SFC<Props> = props => {
  const { title, date, excerpt, slug, timeToRead, category } = props
  const firstChar = title.charAt(0)

  const variants = {
    hidden: { opacity: 0 },

    visible: {
      x: [-50, 0],
      opacity: [0, 1],
      transition: {
        type: 'inertia',
        damping: 10,
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      variants={variants}
      // whileHover={{ scale: 1.04, rotate: 0.8, transition: { ease: 'easeInOut', duration: 0.3 } }}
    >
      <Post>
        <Title>
          <motion.div initial="hidden" whileHover={{ scale: 1.2, transition: { ease: 'easeInOut', duration: 0.3 } }}>
            <Initiale>{firstChar}</Initiale>
          </motion.div>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </Title>
        <Subline>
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
                {category}
              </Link>
            </>
          )}
        </Subline>
        <Excerpt>{excerpt}</Excerpt>
      </Post>
    </motion.div>
  )
}
