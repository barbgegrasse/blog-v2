import PropTypes from 'prop-types'
import React, { useRef, useEffect, useContext } from 'react'
import gsap from 'gsap'
import useWindowSize from '../hooks/useWindowSize'
import { myContext } from '../../provider'
import Header from './Header'

import GlobalStyle from '../styles/global/Global'
import {
  MainContainer,
  GlobalWrapper,
  ScrollWrapper,
} from '../styles/global/layout'

const Layout = ({ children }) => {
  // Hooks
  const size = useWindowSize()

  // Ref for parent div and scrolling div
  const app = useRef()
  const scrollContainer = useRef()

  // // Configs
  // const data = {
  //   ease: 0.1,
  //   current: 0,
  //   previous: 0,
  //   rounded: 0,
  // }

  // // Set the height of the body to the height of the scrolling div
  // const setBodyHeight = () => {
  //   document.body.style.height = `${
  //     scrollContainer.current.getBoundingClientRect().height
  //   }px`
  // }

  // // set the height of the body.
  // useEffect(() => {
  //   setBodyHeight()
  // }, [size.height])

  // // Scrolling
  // const skewScrolling = () => {
  //   // Set Current to the scroll position amount
  //   data.current = window.scrollY
  //   // Set Previous to the scroll previous position
  //   data.previous += (data.current - data.previous) * data.ease
  //   // Set rounded to
  //   data.rounded = Math.round(data.previous * 100) / 100

  //   // Difference between
  //   const difference = data.current - data.rounded
  //   const acceleration = difference / size.width
  //   const velocity = +acceleration
  //   const skew = velocity * 5

  //   // Assign skew and smooth scrolling to the scroll container
  //   if (scrollContainer.current) {
  //     scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`
  //   }

  //   // loop
  //   requestAnimationFrame(() => skewScrolling())
  // }

  // // Run scrollrender once page is loaded.
  // useEffect(() => {
  //   requestAnimationFrame(() => skewScrolling())
  // }, [])

  // memoise the inital timeline in a ref so it doesnt get recreated each render.
  const { current: tl } = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    tl.to('body', {
      visibility: 'visible',
    })
    tl.play()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Passing props to children
  const elements = React.Children.toArray(children)

  const childrenWithProps = React.Children.map(elements, child =>
    React.cloneElement(child, {
      tl,
      scrollContainer,
    })
  )

  return (
    <>
      <Header tl={tl} />
      <GlobalWrapper ref={app} className="GlobalWrapper">
        <ScrollWrapper ref={scrollContainer} className="ScrollWrapper">
          <GlobalStyle />
          <MainContainer className="main-container">
            {childrenWithProps}
          </MainContainer>
        </ScrollWrapper>
      </GlobalWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
