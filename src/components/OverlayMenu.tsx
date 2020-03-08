import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media } from '../utils/media'
import theme from '../../config/Theme'

const OverlayWrapper = styled.div`
  width: 100vw;
  height: 0%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -2;
  /* opacity: 0; */
  /* visibility: hidden; */
  overflow: hidden;
  transition: opacity 0.35s ease-in-out 750ms, scale 0.5s 500ms, visibility 0.35s ease-in-out 500ms, height 0.35s;

  &.active {
    z-index: 9998;
    /* opacity: 1; */
    transform: translate(0%, 0%);
    /* visibility: visible; */
    height: 100vh;

    & a {
      z-index: 999;
      opacity: 1;
    }
  }

  & #shape-overlays {
    z-index: -1;
  }
`

const Circle = styled.div`
  display: block;
  width: 300vmax;
  height: 300vmax;
  width: 2000px;
  height: 2000px;
  z-index: -1;

  position: absolute;
  top: -150vmax;
  right: -150vmax;
  top: -1000px;
  right: -1000px;

  border-radius: 50%;
  backface-visibility: hidden;
  background-color: ${theme.colors.primary};

  transform: scale(0);
  transform-origin: 50% 50%;
  transition: transform 0.4s cubic-bezier(0.755, 0.05, 0.855, 0.06);
  will-change: transform;

  &.active {
    transform: scale(1.5);
  }
`

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 90%;
  width: 60%;
  margin: 0 auto;
  position: relative;
  top: 50%;
  opacity: 0;
  transform: translateY(-50%);
  transition: opacity 250ms ease-in-out 500ms;

  &.active {
    opacity: 1;
  }
`

const NavigationLink = styled(Link)`
  text-decoration: none;
  position: relative;
  color: #fff !important;
  margin: 20px 0;
  z-index: 101;
  text-align: left;
  font-size: 2.8rem;
  font-family: 'Cormorant Garamond';
  font-weight: 300;
  opacity: 1;
  transition: opacity 250ms ease-in-out 1500ms;

  &.active:after {
    position: absolute;
    display: inline-block;
    content: '';
    border-bottom: 10px solid #fff;
    width: 370px;
    font-family: 'Cormorant Garamond';
    position: absolute;
    top: 75px;
    left: -150px;
  }
`

const MenuNumber = styled.div`
  display: inline-block;
  color: ${theme.colors.grey.ultraLight};
  font-family: 'Playfair Display', 'serif';
  margin-right: 10px;
`

type MenuProps = {
  isActive: boolean
}

const OverlayMenu = ({ isActive }: MenuProps) => {
  return (
    <OverlayWrapper className={isActive ? 'active' : ''}>
      <Navigation className={isActive ? 'active' : ''}>
        <NavigationLink activeClassName="active" to={`/`}>
          <MenuNumber>01</MenuNumber>Home
        </NavigationLink>
        <NavigationLink activeClassName="active" to={`/blog`}>
          <MenuNumber>02</MenuNumber> Blog
        </NavigationLink>
        <NavigationLink activeClassName="active" to={`/about`}>
          <MenuNumber>03</MenuNumber>About
        </NavigationLink>
      </Navigation>
      <Circle className={isActive ? 'active' : ''} />
      {/* <S.ShapeOverlays className="shape-overlays" id="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="shape-overlays__path" />
        <path className="shape-overlays__path" />
        <path className="shape-overlays__path" />
      </S.ShapeOverlays> */}
    </OverlayWrapper>
  )
}

export default OverlayMenu