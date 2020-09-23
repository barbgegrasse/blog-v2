import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import React, { useRef, useEffect, useContext } from 'react'

import { myContext } from '../../provider'
import Header from './Header'

import GlobalStyle from '../styles/global/Global'
import {
  Footer,
  GlobalWrapper,
  MainContainer,
  ScrollWrapper,
} from '../styles/global/layout'

const Layout = ({ children }) => {
  // Hooks
  // const size = useWindowSize()

  // Ref for parent div and scrolling div
  const app = useRef()
  const scrollContainer = useRef()
  const refFooter = useRef()

  const contextValues = useContext(myContext)

  useEffect(() => {
    console.info(contextValues)
    contextValues.globalTimeline.addLabel('start')
    contextValues.globalTimeline.set(refFooter.current, {
      visibility: 'visible',
    })
    console.info(contextValues)
    contextValues.globalTimeline.play()
  }, [])

  const date = new Date()
  return (
    <>
      <Header />
      <GlobalWrapper ref={app} className="GlobalWrapper">
        <ScrollWrapper ref={scrollContainer} className="ScrollWrapper">
          <GlobalStyle />
          <MainContainer className="main-container">{children}</MainContainer>
          <Footer ref={refFooter} style={{ visibility: 'hidden' }}>
            © Johan Petrikovsky 2012/{date.getFullYear()} - Développeur web à
            Toulouse et en Haute-Garonne - 51 av. de Lespinet 31400 Toulouse -
            06 15 37 35 95 -{' '}
            <Link to="/mentions-legales">Mentions légales</Link>
          </Footer>
        </ScrollWrapper>
      </GlobalWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
