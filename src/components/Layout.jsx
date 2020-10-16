import PropTypes from 'prop-types'
import React, { useRef, useEffect, useContext } from 'react'
import Link from 'gatsby'
import Scroll from './common/Scroll'

import { myContext } from '../../provider'
import Header from './header/Header'

import GlobalStyle from '../styles/global/Global'
// import menuAnimation from '../animation/layout/menuAnimation'
// import linesAnimation from '../animation/layout/linesAnimation'
// import socialAnimation from '../animation/layout/socialAnimation'

import { Footer, GlobalWrapper, MainContainer } from '../styles/global/layout'

const Layout = ({ children, location }) => {
  const scrollRef = React.createRef()

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
      {/* <GlobalWrapper ref={refApp} className="GlobalWrapper"> */}
      <Scroll callbacks={location} scrollRef={scrollRef} />

      <GlobalStyle />
      <MainContainer ref={scrollRef} className="main-container">
        {children}
      </MainContainer>

      {/* <Footer ref={refFooter} style={{ visibility: 'hidden' }}>
          © Johan Petrikovsky 2012/{date.getFullYear()} - Développeur web à
          Toulouse et en Haute-Garonne - 51 av. de Lespinet 31400 Toulouse - 06
          15 37 35 95 - <Link to="/mentions-legales">Mentions légales</Link>
        </Footer> */}

      <Header />
      {/* </GlobalWrapper> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
