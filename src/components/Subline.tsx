import styled from 'styled-components'
import { media } from '../utils/media'
interface Props {
  theme: {
    fontSize: {
      small: number
      big: number
    }
    colors: {
      white: string
      grey: {
        light: string
      }
    }
  }
  sectionTitle: string
  light: boolean
}

export const Subline: any = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${(props: Props) => props.theme.fontSize.small};
  ${(props: Props) => props.sectionTitle && 'text-align: center'};
  margin: 0 auto;

  @media ${media.large} {
    max-width: 65vw;
  }
  @media ${media.medium} {
    max-width: 75vw;
  }
  @media ${media.small} {
    max-width: 85vw;
  }
`
