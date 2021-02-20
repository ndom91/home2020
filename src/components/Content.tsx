import styled from 'styled-components'
import { media } from '../utils/media'
// @ts-ignore
import config from '../../config/SiteConfig'

export const Content = styled.div`
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 8rem;
  background-color: var(--bg);
  font-family: ${config.sanSerifFontFamily};
  font-weight: 400;
  margin: 4rem 1rem 5rem 1rem;
  max-width: 1400px;

  @media ${media.large} {
    margin-top: -35px;
    padding: 3rem 5rem;
  }
  @media ${media.medium} {
    padding: 2rem 1.6rem;
  }
  @media ${media.small} {
    padding: 1rem 0rem;
  }
`
