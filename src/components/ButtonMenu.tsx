import React, { useState } from 'react'
import styled from 'styled-components'
import { media } from '../utils/media'
import theme from '../../config/Theme'
import OverlayMenu from './OverlayMenu'

const Wrapper = styled.div`
  display: none;
  margin: 6rem auto 0 auto;
  a {
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
  }
  justify-items: center;
  @media ${media.small} {
    display: flex;
    margin: 1rem;
  }
`

const ButtonHamburger = styled.button`
  background: transparent;
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  position: absolute;
  border-radius: 3px;
  z-index: 99;
  top: ${theme.space.medium};
  right: ${theme.space.medium};
  @media ${media.small} {
    display: inline-block;
  }

  &.active {
    z-index: 9999;
    position: fixed;
    span {
      background: transparent;
      &:before,
      &:after {
        top: 0;
        left: 0;
        background-color: #fff;
      }
      &:before {
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
  }
  span {
    background: ${theme.colors.bg};
    border-radius: 10px;
    display: inline-block;
    height: 3px;
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:before,
    &:after {
      content: '';
      background: ${theme.colors.bg};
      border-radius: 10px;
      display: inline-block;
      height: 3px;
      width: 100%;
      position: absolute;
      left: 0;
      transition: 0.3s;
    }

    &:before {
      top: -10px;
    }

    &:after {
      bottom: -10px;
    }
  }
`

const ButtonMenu = () => {
  const [active, setActive] = useState(false)

  return (
    <Wrapper>
      <ButtonHamburger onClick={() => setActive(!active)} className={active ? 'active' : ''}>
        <span />
      </ButtonHamburger>
      <OverlayMenu isActive={active} />
    </Wrapper>
  )
}

export default ButtonMenu
