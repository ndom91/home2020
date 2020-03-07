import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { darken, lighten } from 'polished'
import rgba from 'polished/lib/color/rgba'
import { media } from '../utils/media'
import config from '../../config/SiteConfig'

const HeaderWrapper: any = styled.header`
  position: relative;
  background: linear-gradient(
      -185deg,
      ${props => rgba(darken(0.1, props.theme.colors.primary), 0.6)},
      ${props => rgba(lighten(0.1, props.theme.colors.grey.dark), 0.8)}
    ),
    url(${(props: any) => props.banner}) no-repeat;
  background-size: cover;
  padding: 2rem 2rem 3rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ::after {
    background: transparent url(/assets/mask.svg) no-repeat bottom left;
    background-size: 101%;
    bottom: -2px;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
  @media ${media.tablet} {
    padding: 1rem 2rem 1rem;
  }
  @media ${media.phone} {
    padding: 1rem 0.5rem 2rem;
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

  a {
    color: white;
    &:hover {
      opacity: 0.85;
      color: white;
    }
  }
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px 20px;

  a {
    margin-left: 10px;
  }
`

interface Props {
  children: any
  banner?: string
}

export class Header extends React.PureComponent<Props> {
  public render() {
    return (
      <HeaderWrapper banner={this.props.banner || config.defaultBg}>
        <ContentWrapper>
          <img height="128" src={config.siteLogo} />
          <Content>
            <LinkWrapper>
              01 <Link to={`/`}>Home</Link>
            </LinkWrapper>
            <LinkWrapper>
              02 <Link to={`/blog`}>Blog</Link>
            </LinkWrapper>
            <LinkWrapper>
              03 <Link to={`/about`}>About</Link>
            </LinkWrapper>
          </Content>
        </ContentWrapper>
      </HeaderWrapper>
    )
  }
}
