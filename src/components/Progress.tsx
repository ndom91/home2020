import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../../config/Theme'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Progress = styled.div<{ pos: number }>`
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(to right, ${theme.colors.primary} ${props => props.pos}%, transparent 0);
  width: 100%;
  height: 6px;
  z-index: 99999;
`

const ProgressBar: React.SFC<{}> = () => {
  const [scrollPos, setScrollPos] = useState(0)
  const pageHeight = document && document.body.scrollHeight - window.innerHeight
  useScrollPosition(({ currPos }) => {
    const percentScrolled = Math.abs(currPos.y) / pageHeight
    setScrollPos(percentScrolled * 100)
  })

  return <Progress pos={scrollPos} />
}

export default ProgressBar
