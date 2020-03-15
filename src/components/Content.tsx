import styled from 'styled-components'
import { media } from '../utils/media'

export const Content = styled.div`
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 8rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -4rem;
  margin-bottom: 5rem;
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
  @media ${media.large} {
    margin-top: -35px;
    padding: 3rem 5rem;
  }
  @media ${media.medium} {
    padding: 2rem 4.5rem;
  }
  @media ${media.small} {
    padding: 2rem 2.5rem;
  }
`
