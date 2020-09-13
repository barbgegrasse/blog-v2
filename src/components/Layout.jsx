import PropTypes from 'prop-types'
import React, { useRef, useEffect, useContext } from 'react'
import gsap from 'gsap'
import Scrollbar from 'react-smooth-scrollbar'

import { myContext } from '../../provider'
import GlobalStyle from '../styles/global/Global'
import Header from './Header'
import { MainContainer, GlobalWrapper } from '../styles/global/layout'

const Layout = ({ children }) => {
  let refApp = useRef(null)

  // memoise the inital timeline in a ref so it doesnt get recreated each render.
  const { current: tl } = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    tl.to(refApp, {
      visibility: 'visible',
    })
    tl.play()
  })

  return (
    <myContext.Consumer>
      {context => (
        <>
          <Header />
          <Scrollbar
            onScroll={(status, data) => {
              context.updateScroll(data.offset.y)
            }}
            damping={0.05}
          >
            <div style={{ maxHeight: '100vh' }}>
              <GlobalWrapper
                ref={element => {
                  refApp = element
                }}
              >
                <GlobalStyle />

                <MainContainer>{children}</MainContainer>
              </GlobalWrapper>
            </div>
          </Scrollbar>
        </>
      )}
    </myContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
