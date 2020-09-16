import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import React, { useRef, useEffect } from 'react'

import { gsap, Power3 } from 'gsap'
import { DrawSVGPlugin } from 'gsap/all'

import Logo from '../images/assets/logo.svg'

import {
  WrapperHeader,
  LineWrapper,
  Line,
  LogoWrapper,
} from '../styles/components/header/header'

gsap.registerPlugin(DrawSVGPlugin)

const Header = ({ tl }) => {
  const refLineWrapper = useRef(null)
  const refLineHorizontal1 = useRef(null)
  const refLineHorizontal2 = useRef(null)
  const refLineClose1 = useRef(null)
  const refLineVertical1 = useRef(null)
  const refLineVertical2 = useRef(null)
  const refLineClose2 = useRef(null)

  useEffect(() => {
    tl.addLabel('VisibilityWrapperLine').set(refLineWrapper.current, {
      visibility: 'visible',
    })
    tl.addLabel('horizontalLineStart')
      .from(refLineHorizontal1.current, {
        scaleX: '0',
        duration: 0.5,
        ease: Power3.easeInOut,
      })
      .from(
        refLineHorizontal2.current,
        {
          scaleX: '0',
          duration: 0.5,
        },
        'horizontalLineStart'
      )
      .from(
        refLineVertical1.current,
        {
          scaleY: '0',
          duration: 0.5,
        },
        'horizontalLineStart'
      )
      .from(
        refLineVertical2.current,
        {
          scaleY: '0',
          duration: 0.6,
        },
        'horizontalLineStart'
      )
      .from(refLineClose1.current, {
        scaleY: '0',
        duration: 0.5,
      })
      .from(refLineClose2.current, {
        scaleX: '0',
        duration: 0.5,
      })
      .addLabel('finishLine')
      .pause()
  }, [])

  return (
    <>
      <LineWrapper ref={refLineWrapper}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Line ref={refLineHorizontal1} className="line horizontal1" />
        <Line ref={refLineHorizontal2} className="line horizontal2" />
        <Line ref={refLineClose1} className="line close1" />
        <Line ref={refLineVertical1} className="line vertical1" />
        <Line ref={refLineVertical2} className="line vertical2" />
        <Line ref={refLineClose2} className="line close2" />
      </LineWrapper>
      <WrapperHeader>
        <nav>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/">Bio</Link>
            </li>
          </ul>
        </nav>
      </WrapperHeader>
    </>
  )
}

Header.propTypes = {
  tl: PropTypes.shape({
    addLabel: PropTypes.func,
  }),
}

export default Header
