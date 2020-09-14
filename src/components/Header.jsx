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
  console.info(tl)
  const refLineHorizontal1 = useRef(null)
  const refLineHorizontal2 = useRef(null)
  const refLineClose1 = useRef(null)
  const refLineVertical1 = useRef(null)
  const refLineVertical2 = useRef(null)
  const refLineClose2 = useRef(null)

  useEffect(() => {
    tl.addLabel('horizontalLineStart')
      .to(refLineHorizontal1.current, {
        width: '100%',
        duration: 0.5,
        ease: Power3.easeInOut,
      })
      .to(
        refLineHorizontal2.current,
        {
          width: '100%',
          duration: 0.5,
        },
        'horizontalLineStart'
      )
      .to(
        refLineVertical1.current,
        {
          height: '100%',
          duration: 0.5,
        },
        'horizontalLineStart'
      )
      .to(
        refLineVertical2.current,
        {
          height: '100%',
          duration: 0.6,
        },
        'horizontalLineStart'
      )
      .to(refLineClose1.current, {
        height: '88px',
        duration: 0.5,
      })
      .to(refLineClose2.current, {
        width: '88px',
        duration: 0.5,
      })
      .addLabel('finishLine')
      .pause()
  }, [])

  return (
    <>
      <LineWrapper>
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
