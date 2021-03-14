import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { motion } from 'framer-motion'

const ToggleButton = styled(motion.button)`
  display: block;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  height: 24px;
  width: 24px;
  padding: 0;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`

export const DarkToggle: React.FunctionComponent = () => {
  if (typeof window === 'undefined') return <></>

  const themeContext = useContext(ThemeContext)
  const { colorMode, setColorMode } = themeContext
  // const y = useSpring(0, { damping: 10 })

  document.documentElement.setAttribute('data-theme', colorMode)

  const changeColorMode = () => {
    if (colorMode === 'light') {
      setColorMode('dark')
      const sound = document.getElementById('js-sound-off')
      if (sound) {
        sound.currentTime = 0
        sound.play()
      }
    } else {
      setColorMode('light')
      const sound = document.getElementById('js-sound-on')
      if (sound) {
        sound.currentTime = 0
        sound.play()
      }
    }
  }

  return (
    <>
      <ToggleButton
        whileTap={{ scale: 0.8 }}
        whileHover={{ rotate: 40 }}
        transition={{ type: 'spring', stiffness: 100, damping: 3 }}
        onClick={() => changeColorMode()}
      >
        {colorMode === 'light' ? (
          // Sun
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="24" width="24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="var(--grey-light)"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          // Moon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="24" width="24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="var(--grey-light)"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </ToggleButton>
    </>
  )
}
