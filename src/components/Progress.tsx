import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWindowScroll } from 'react-use'

const Progress = styled.div<{ pos: number }>`
  position: fixed;
  padding: 0 !important;
  top: 0;
  left: 0;
  background: linear-gradient(to right, var(--primary) ${(props) => props.pos}%, transparent 0);
  width: 100%;
  height: 6px;
  z-index: 99999;
`

export const ProgressBar: React.FunctionComponent = () => {
  if (typeof window === 'undefined') return <></>

  const { y } = useWindowScroll()
  const [scrollPos, setScrollPos] = useState(0)
  const pageHeight = document.body.scrollHeight - window.innerHeight

  useEffect(() => {
    const percentScrolled = Math.abs(y) / pageHeight
    setScrollPos(percentScrolled * 100)
  }, [y])

  return <Progress pos={scrollPos} />
}
