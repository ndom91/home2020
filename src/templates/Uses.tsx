import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import { Layout, Wrapper, Header, SectionTitle } from '../components'
// import { motion } from 'framer-motion'
import { media } from '../utils/media'
import '../utils/prismjs-theme.css'
import { DefaultPageProps } from '../models'

const UsingHeader = styled.h1`
  text-align: center;
  font-family: var(--font-serif);
  font-display: swap;
  font-size: 3rem;
  font-weight: 500;
  padding-bottom: 50px;
  @media ${media.medium} {
    font-size: 3rem;
  }
`

const SubHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media ${media.medium} {
    flex-direction: column;
    align-items: center;
  }
`

// const SubHeaderText = styled.div`
//   font-size: 1.4rem;
//   font-family: var(--font-sansSerif);
//   font-display: swap;
//   font-weight: 300;
//   padding: 0 2em;
//   line-height: 2.3rem;
//   z-index: 2;
//   @media ${media.medium} {
//     font-size: 1.1rem;
//   }
// `

// const HeaderImage = styled.div`
//   min-width: 350px;
//   border: 15px solid var(--primary);
//   border-radius: 10px;
//   transform: translateX(-10%);
//   transition-property: transform scale rotate;
//   transition-duration: 250ms;
//   transition-timing-function: ease-out;
//   &:hover {
//     transform: translateX(-10%) scale(1.05) rotate(-7deg);
//   }
//   @media ${media.medium} {
//     min-width: unset;
//     width: 100%;
//     transform: none;
//     margin: 10px 10px 140px 10px;
//     &:hover {
//       transform: scale(1.05) rotate(-7deg);
//     }
//   }
//   @media ${media.small} {
//     width: 90%;
//     transform: none;
//     margin-bottom: 50px;
//     &:hover {
//       transform: scale(1.05) rotate(-7deg);
//     }
//   }
// `

const UsesItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  @media ${media.small} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const UsesHeader = styled.h3`
  margin-top: 80px;
  text-align: center;
  font-family: var(--font-serif);
  font-display: swap;
  font-size: 3.5rem;
  font-weight: 500;
  padding-bottom: 50px;
  @media ${media.medium} {
    font-size: 3rem;
  }
`

const Uses: React.FunctionComponent<DefaultPageProps> = () => {
  // const list = {
  //   visible: {
  //     opacity: [0, 1],
  //     transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  //   },
  // }

  return (
    <Layout>
      <Helmet title={'Uses'} />
      <Header>
        <SectionTitle>Uses</SectionTitle>
      </Header>
      <Wrapper>
        <UsingHeader className="js-darkmode-flicker">Using</UsingHeader>
        <SubHeader>
          {/* <SubHeaderText>
              Inspired by{' '}
              <a target="_blank" rel="noopener noreferer" href="https://uses.tech/">
                uses.tech
              </a>
            </SubHeaderText> */}
        </SubHeader>
        <UsesItems>
          <UsesHeader>🚧 Under Construction..</UsesHeader>
        </UsesItems>
      </Wrapper>
    </Layout>
  )
}

export default Uses
