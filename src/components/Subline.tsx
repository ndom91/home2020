import styled from 'styled-components'
import rgba from 'polished/lib/color/rgba'
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
  ${(props: Props) => props.light && `color: ${rgba(props.theme.colors.white, 0.7)}`};
  ${(props: Props) => props.sectionTitle && 'text-align: center'};

  /* @media ${media.small} {
    margin: 1em 1em;
  } */
`
