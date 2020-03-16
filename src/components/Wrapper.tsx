import styled from 'styled-components'
import { media } from '../utils/media'

export const Wrapper: any = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  max-width: ${(props: any) => (props.fullWidth ? '100%' : '100rem')};
  padding: ${(props: any) => (props.fullWidth ? '0' : '0 6rem')};
  @media ${media.large} {
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 3rem')};
  }
  @media ${media.medium} {
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 1rem')};
  }
`
