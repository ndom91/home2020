import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { darken, lighten } from 'polished'
import rgba from 'polished/lib/color/rgba'
import { media } from '../utils/media'
import config from '../../config/SiteConfig'
import theme from '../../config/Theme'
import ButtonMenu from './ButtonMenu'

const HeaderWrapper: any = styled.header`
  position: relative;
  background: linear-gradient(
      -185deg,
      ${props => rgba(darken(0.1, props.theme.colors.primary), 0.6)},
      ${props => rgba(lighten(0.1, props.theme.colors.grey.dark), 0.8)}
    ),
    url(${(props: any) => props.banner}) no-repeat;
  background-size: cover;
  background-position-y: 40%;
  padding: 2rem 2rem 3rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ::after {
    background: transparent url(/assets/images/mask.svg) no-repeat bottom left;
    background-size: 101%;
    bottom: -2px;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
  @media ${media.large} {
    padding: 1rem 2rem 2.5rem;
  }
  @media ${media.medium} {
    padding: 0.5rem 1rem 0.5rem;
  }
  @media ${media.small} {
    padding: 1rem 0.5rem 0rem;
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
  align-items: flex-end;
  z-index: 99;
  @media ${media.medium} {
    display: none;
  }

  a {
    color: white;
    &:hover {
      opacity: 0.85;
      color: white;
    }
  }
`

const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  margin: 5px 20px;
  height: 39px;
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;

  font-weight: 400;
  letter-spacing: 1px;
  font-family: ${config.sanSerifFontFamily};
  font-display: swap;

  &.active {
    &:before {
      content: '';
      position: absolute;
      z-index: -2;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${theme.colors.grey.ultraLight};
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
    background-color: ${theme.colors.primary};
    height: 4px;
    transition: left 200ms ease-in-out, background-color 250ms ease-in-out;
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    background-color: ${theme.colors.primary};
    left: 0;
  }
`

const MenuNumber = styled.span`
  color: ${theme.colors.grey.light};
  font-size: 1rem;
  font-weight: 600;
  font-family: ${config.sanSerifFontFamily};
  font-display: swap;
  margin-right: 8px;
`

const HeaderImage = styled.img`
  height: 110px;
  z-index: 99;

  /* &:hover {
    cursor: pointer;
  } */
`

interface Props {
  banner?: string
}
export const Header: React.SFC<Props> = props => {
  return (
    <HeaderWrapper banner={props.banner || config.defaultBg}>
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
          <LinkWrapper to={`/about`} activeClassName="active">
            <MenuNumber>03</MenuNumber>about
          </LinkWrapper>
        </Content>
      </ContentWrapper>
    </HeaderWrapper>
  )
}
