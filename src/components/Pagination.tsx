import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media } from '../utils/media'

export const PaginationContainer = styled.div`
  text-align: center;
  margin: 2rem;
  margin: 2rem auto;
  @media ${media.large} {
    max-width: 65vw;
  }
  @media ${media.medium} {
    max-width: 75vw;
  }
  @media ${media.small} {
    max-width: 85vw;
`

export const PaginationContent = styled.div`
  display: inline-flex;
  justify-content: space-between;
  padding: 0 2.5rem;
  border-radius: 3.5rem;
  background-color: #eee;

  @media ${media.medium} {
    padding: 0 1rem;
    width: 130%;
    transform: translateX(-12.5%);
  }
  @media ${media.small} {
    padding: 0 1rem;
    width: 90%;
    transform: none;
  }

  .page-numbers {
    display: block;
    float: left;
    transition: 400ms ease;
    color: var(--grey-light);
    letter-spacing: 0.1em;
    padding: 1rem;

    &:hover,
    &.current {
      background-color: var(--primary);
      color: var(--white);
    }

    &.prev {
      margin-left: -1.5rem;
    }

    &.next {
      margin-right: -1.5rem;
    }

    &.prev:hover,
    &.next:hover {
      background-color: transparent;
      color: #f80505;
    }

    @media ${media.large} {
      padding: 0 1.4rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      display: none;

      &:nth-of-type(2) {
        position: relative;
        padding-right: 5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;

        &::after {
          content: '...';
          position: absolute;
          top: 0;
          left: 4.5rem;
          padding-top: 0.8rem;
          padding-bottom: 1.2rem;
        }
      }

      &:nth-child(-n + 3),
      &:nth-last-child(-n + 3) {
        display: block;
      }

      &:nth-last-child(-n + 4) {
        padding-right: 1.4rem;

        &::after {
          content: none;
        }
      }
    }
    @media ${media.medium} {
      padding: 0.5rem 0.8rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      display: none;

      &:nth-of-type(2) {
        position: relative;
        padding-right: 2.5rem;

        &::after {
          content: '...';
          position: absolute;
          top: 0;
          left: 2.5rem;
        }
      }

      &:nth-child(-n + 3),
      &:nth-last-child(-n + 3) {
        display: block;
      }

      &:nth-last-child(-n + 4) {
        padding-right: 0.8rem;

        &::after {
          content: none;
        }
      }
    }
    @media ${media.small} {
      padding: 0.2rem 0.4rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      display: none;

      &:nth-of-type(2) {
        position: relative;
        padding-right: 1.5rem;

        &::after {
          content: '...';
          position: absolute;
          top: 0;
          left: 2.5rem;
        }
      }

      &:nth-child(-n + 3),
      &:nth-last-child(-n + 3) {
        display: block;
      }

      &:nth-last-child(-n + 4) {
        padding-right: 0.8rem;

        &::after {
          content: none;
        }
      }
    }
  }
`

const PageNumberWrapper = styled.div`
  display: flex;
  flex: 1;
  @media ${media.medium} {
    justify-content: space-around;
  }
  @media ${media.small} {
    justify-content: space-around;
  }
`

interface Props {
  currentPage: number
  totalPages: number
  url: string
}

export const Pagination: React.FunctionComponent<Props> = (props) => {
  const { currentPage, totalPages, url } = props
  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages
  const prevPage = currentPage - 1 === 1 ? `/${url}/` : `/${url}/${(currentPage - 1).toString()}`
  const nextPage = `/${url}/${(currentPage + 1).toString()}`
  return totalPages > 1 ? (
    <PaginationContainer>
      <PaginationContent>
        {!isFirst && (
          <Link className="prev page-numbers" to={prevPage} rel="prev">
            {typeof window !== 'undefined' && window.innerWidth > 700 ? '← Prev' : '←'}
          </Link>
        )}
        <PageNumberWrapper>
          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              className={currentPage === i + 1 ? 'page-numbers current' : 'page-numbers'}
              key={`pagination-number${i + 1}`}
              to={`/${url}/${i === 0 ? '' : i + 1}`}
            >
              {i + 1}
            </Link>
          ))}
        </PageNumberWrapper>
        {!isLast && (
          <Link className="next page-numbers" to={nextPage} rel="next">
            {/* Next → */}
            {typeof window !== 'undefined' && window.innerWidth > 700 ? 'Next →' : '→'}
          </Link>
        )}
      </PaginationContent>
    </PaginationContainer>
  ) : null
}
