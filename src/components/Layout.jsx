import PropTypes from 'prop-types'
import React, { useRef, useEffect, useContext } from 'react'

import { myContext } from '../../provider'
import Header from './header/Header'

import GlobalStyle from '../styles/global/Global'

// import menuAnimation from '../animation/layout/menuAnimation'
// import linesAnimation from '../animation/layout/linesAnimation'
// import socialAnimation from '../animation/layout/socialAnimation'

import { Footer, MainContainer } from '../styles/global/layout'

const Layout = ({ children }) => {
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
      <GlobalStyle />
      <MainContainer className="main-container">{children}</MainContainer>
      <Header />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
