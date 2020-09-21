import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import React, { useRef, useEffect } from 'react'

import { gsap, Expo } from 'gsap'
import SplitText from 'gsap/SplitText'
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
  const refBio = useRef(null)
  const refBlog = useRef(null)
  const refLogo = useRef(null)
  const refLineWrapper = useRef(null)
  const refLineHorizontal1 = useRef(null)
  const refLineHorizontal2 = useRef(null)
  const refLineClose1 = useRef(null)
  const refLineVertical1 = useRef(null)
  const refLineVertical2 = useRef(null)
  const refLineClose2 = useRef(null)

  const tlSettings = {
    staggerValue: 0.05,
    charsDuration: 0.5,
  }

  useEffect(() => {
    const splitBio = new SplitText(refBio.current, {
      type: 'chars',
      position: 'relative',
    })
    const charsBio = splitBio.chars

    const splitBlog = new SplitText(refBlog.current, {
      type: 'chars',
      position: 'relative',
    })
    const charsBlog = splitBlog.chars

    tl.addLabel('VisibilityWrapperLine').set(refLineWrapper.current, {
      visibility: 'visible',
    })
    tl.addLabel('horizontalLineStart')
      .from(
        refLineHorizontal1.current,
        {
          scaleX: '0',
          duration: 0.9,
          ease: Expo.easeOut,
        },
        'horizontalLineStart'
      )
      .from(refLineClose1.current, {
        scaleY: '0',
        duration: 0.1,
        ease: Expo.easeOut,
      })
      .from(refLineHorizontal2.current, {
        scaleX: '0',
        duration: 0.9,
        ease: Expo.easeOut,
      })
      .addLabel('horizontalLineClose')
      // CLOSE HORIZONTAL LINES
      .from(
        refLineVertical2.current,
        {
          scaleY: '0',
          duration: 0.9,
          ease: Expo.easeOut,
        },
        'horizontalLineStart'
      )
      .from(
        refLineClose2.current,
        {
          scaleX: '0',
          duration: 0.1,
          ease: Expo.easeOut,
        },
        'horizontalLineStart+=0.9'
      )
      .from(
        refLineVertical1.current,
        {
          scaleY: '0',
          duration: 0.9,
          ease: Expo.easeOut,
        },
        'horizontalLineStart+=1'
      )
      .addLabel('finishLine')
      .staggerFrom(
        charsBio,
        tlSettings.charsDuration,
        {
          ease: Expo.easeOut,
          y: '+100%',
        },
        'horizontalLineClose',
        tlSettings.staggerValue
      )
      .staggerFrom(
        charsBlog,
        tlSettings.charsDuration,
        {
          ease: Expo.easeOut,
          y: '+100%',
        },
        'horizontalLineClose',
        tlSettings.staggerValue
      )
  }, [])

  return (
    <>
      <LineWrapper ref={refLineWrapper}>
        <LogoWrapper id="logo-wrapper" ref={refLogo}>
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
              <Link to="/">
                <div style={{ overflow: 'hidden' }} ref={refBio}>
                  Bio
                </div>
              </Link>
            </li>
            <li style={{ overflow: 'hidden' }} ref={refBlog}>
              <Link to="/blog">Blog</Link>
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
