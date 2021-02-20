import styled from 'styled-components'
import { media } from '../utils/media'

export const Wrapper: any = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin: 0 auto;
  max-width: ${(props: any) => (props.fullWidth ? '100%' : '100rem')};
  padding: ${(props: any) => (props.fullWidth ? '0' : '0 6rem')};
  @media ${media.xlarge} {
    margin: unset;
  }
  @media ${media.large} {
    margin: unset;
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 3rem')};
  }
  @media ${media.medium} {
    margin: unset;
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 1rem')};
  }
  @media ${media.small} {
    margin: unset;
    max-width: 100%;
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 1rem')};
  }
`
