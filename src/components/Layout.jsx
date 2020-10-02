import PropTypes from 'prop-types'
import React, { useRef, useEffect, useContext, useState } from 'react'
import Link from 'gatsby'

import { myContext } from '../../provider'
import Header from './header/Header'

import GlobalStyle from '../styles/global/Global'
// import menuAnimation from '../animation/layout/menuAnimation'
// import linesAnimation from '../animation/layout/linesAnimation'
// import socialAnimation from '../animation/layout/socialAnimation'

import {
  Footer,
  GlobalWrapper,
  MainContainer,
  ScrollWrapper,
} from '../styles/global/layout'

const Layout = ({ children }) => {
  // Ref for parent div and scrolling div
  const refApp = useRef()
  const refFooter = useRef()

  const contextValues = useContext(myContext)
  const {
    layoutTimeline,
    setLayoutTimeline,
    setShouldLayoutAnimate,
  } = contextValues

  layoutTimeline.addLabel('start')
  if (typeof window !== `undefined`) {
    layoutTimeline.set('body', {
      visibility: 'visible',
    })
  }
  setLayoutTimeline(layoutTimeline)

  useEffect(() => {
    layoutTimeline.play()
    setShouldLayoutAnimate(false)
  }, [])

  const date = new Date()

  return (
    <>
      <Header />
      <GlobalWrapper ref={refApp} className="GlobalWrapper">
        <ScrollWrapper className="ScrollWrapper">
          <GlobalStyle />
          <MainContainer className="main-container">{children}</MainContainer>
          {/* <Footer ref={refFooter} style={{ visibility: 'hidden' }}>
            © Johan Petrikovsky 2012/{date.getFullYear()} - Développeur web à
            Toulouse et en Haute-Garonne - 51 av. de Lespinet 31400 Toulouse -
            06 15 37 35 95 -{' '}
            <Link to="/mentions-legales">Mentions légales</Link>
          </Footer> */}
        </ScrollWrapper>
      </GlobalWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
