import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { media } from '../utils/media'
// @ts-ignore
import config from '../../config/SiteConfig'
import { ButtonMenu } from './ButtonMenu'
import { DarkToggle } from './DarkToggle'

interface Props {
  banner?: string
}

const HeaderWrapper: any = styled.header`
  position: relative;
  background: linear-gradient(-185deg, #c13838, var(--grey-default)), url(${(props: any) => props.banner}) no-repeat;
  background-size: cover;
  background-position-y: 40%;
  padding: 2rem 2rem 4rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media ${media.large} {
    padding: 1rem 2rem 3.5rem;
  }
  @media ${media.medium} {
    padding: 0.5rem 1rem 2rem;
  }
  @media ${media.small} {
    padding: 1rem 0.5rem 2rem;
  }
`

const HeaderMask = styled.div`
  width: 101%;
  position: absolute;
  left: 0;
  bottom: -6px;
  & svg path {
    fill: var(--bg) !important;
  }
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  z-index: 99;
  @media ${media.medium} {
    display: none;
  }

  a {
    color: var(--white);
    &:hover {
      opacity: 0.85;
      color: var(--white);
    }
  }
`

const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  margin: 5px 20px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;

  font-weight: 400;
  letter-spacing: 1px;
  font-family: var(--font-sansSerif);
  font-display: swap;

  &.active {
    &:before {
      content: '';
      position: absolute;
      z-index: -2;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--grey-lighter);
      height: 4px;
      transition-property: left, background-color;
      transition-duration: 400ms;
      transition-timing-function: ease-in-out;
    }
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 100%;
    right: 0;
    bottom: 0;
    background-color: var(--primary);
    height: 4px;
    transition: left 200ms ease-in-out, background-color 250ms ease-in-out;
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    background-color: var(--primary);
    left: 0;
  }
`

const MenuNumber = styled.span`
  color: var(--grey-light);
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-sansSerif);
  font-display: swap;
  margin-right: 8px;
`

const HeaderImage = styled.img`
  height: 110px;
  z-index: 99;
`

export const Header: React.FunctionComponent<Props> = ({ banner }) => {
  return (
    <HeaderWrapper banner={banner || config.defaultBg}>
      <ContentWrapper>
        <Link to="/" style={{ zIndex: 99 }}>
          <HeaderImage height="110" src={config.siteLogo} alt="Logo" />
        </Link>
        <ButtonMenu />
        <Content>
          <LinkWrapper to={`/`} activeClassName="active">
            <MenuNumber>01</MenuNumber>home
          </LinkWrapper>
          <LinkWrapper to={`/blog`} partiallyActive activeClassName="active">
            <MenuNumber>02</MenuNumber>blog
          </LinkWrapper>
          <LinkWrapper to={`/uses`} activeClassName="active">
            <MenuNumber>03</MenuNumber>uses
          </LinkWrapper>
          <LinkWrapper to={`/about`} activeClassName="active">
            <MenuNumber>04</MenuNumber>about
          </LinkWrapper>
          <DarkToggle />
        </Content>
      </ContentWrapper>
      <HeaderMask>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1417 152">
          <path fill="currentColor" d="M1416.281-.014v151.336H-.288C935.129 111.722 1401.807 3.39 1416.282-.014z" />
        </svg>
      </HeaderMask>
    </HeaderWrapper>
  )
}
