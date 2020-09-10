import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

import PropTypes from 'prop-types'
import GlobalStyle from '../styles/global/Global'
import Header from './Header'
import {
  MainContainer,
  GlobalWrapper,
  FooterWrapper,
} from '../styles/global/layout'

const Layout = ({ children }) => {
  const refApp = useRef(null)

  // memoise the inital timeline in a ref so it doesnt get recreated each render.
  const { current: tl } = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    tl.to('#app', {
      visibility: 'visible',
    })
    tl.play()
  })

  return (
    <GlobalWrapper id="app">
      <GlobalStyle />
      <Header />
      <MainContainer className="max-container">{children}</MainContainer>
      <FooterWrapper className="max-container">
        © {new Date().getFullYear()}, Construit avec passion
        <a href="https://www.gatsbyjs.org"> Gatsby</a> et{' '}
        <a href="https://prismic.io/">Prismic</a>
      </FooterWrapper>
    </GlobalWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
