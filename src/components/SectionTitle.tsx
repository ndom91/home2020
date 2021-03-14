import styled from 'styled-components'

export const SectionTitle: any = styled.div`
  font-size: 2.9rem;
  text-transform: ${(props: any) => (props.uppercase ? 'uppercase' : 'normal')};
  font-family: var(--font-serif);
  color: var(--grey-dark);
  font-display: swap;
  text-align: center;
  position: relative;
  padding: 2rem 0 0;
  margin-bottom: 2rem;
  &:after {
    content: '';
    height: 1px;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    background: var(--white);
  }
`
