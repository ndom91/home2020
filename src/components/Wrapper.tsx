import styled from 'styled-components'
import { media } from '../utils/media'

export const Wrapper: any = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  max-width: ${(props: any) => (props.fullWidth ? '100%' : '100rem')};
  padding: ${(props: any) => (props.fullWidth ? '0' : '0 6rem')};
  @media ${media.large} {
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 3rem')};
  }
  @media ${media.medium} {
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 1rem')};
  }
  @media ${media.small} {
    max-width: 100%;
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 1rem')};
  }
`
