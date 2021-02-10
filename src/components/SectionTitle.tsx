import styled from 'styled-components'
// @ts-ignore
import config from '../../config/SiteConfig'
import theme from '../../config/Theme'

export const SectionTitle: any = styled.div`
  font-size: ${(props) => props.theme.fontSize.big};
  text-transform: ${(props: any) => (props.uppercase ? 'uppercase' : 'normal')};
  font-family: ${config.serifFontFamily};
  color: ${theme.colors.grey.dark};
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
    background: ${(props) => props.theme.colors.white};
  }
`
