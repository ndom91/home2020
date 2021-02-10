import styled from 'styled-components'

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
`
