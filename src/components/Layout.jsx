import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import gsap from 'gsap'
import React, { useRef, useEffect, useContext } from 'react'

import { myContext } from '../../provider'
import Header from './header/Header'

import GlobalStyle from '../styles/global/Global'
import menuAnimation from '../animation/layout/menuAnimation'
import linesAnimation from '../animation/layout/linesAnimation'
import socialAnimation from '../animation/layout/socialAnimation'

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
  const scrollContainer = useRef()

  const contextValues = useContext(myContext)
  const { globalTimeline, layoutAnimation, setLayoutAnimation } = contextValues

  // memoise the inital timeline in a ref so it doesnt get recreated each render.
  const { current: masterTl } = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    masterTl.addLabel('start')
    masterTl.set('body', {
      visibility: 'visible',
    })
    masterTl.set(refFooter.current, {
      visibility: 'visible',
    })

    if (layoutAnimation) {
      masterTl.add(linesAnimation())
      masterTl.add(menuAnimation(), 'VisibilityWrapperLine-=1.5')
      masterTl.add(socialAnimation(), 'VisibilityWrapperLine-=1.5')
    }
    masterTl.play()
  }, [])

  const date = new Date()
  return (
    <>
      <Header />
      <GlobalWrapper ref={refApp} className="GlobalWrapper">
        <ScrollWrapper ref={scrollContainer} className="ScrollWrapper">
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
