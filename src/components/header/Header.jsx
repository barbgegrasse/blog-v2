import PropTypes from 'prop-types'
import Link from 'gatsby-plugin-transition-link'
import React, { useRef, useEffect, useContext } from 'react'
import gsap, { Expo } from 'gsap'

// import profilAnimation from '../../animation/index/profilAnimation'
// import mainTitleAnimation from '../../animation/index/mainTitleAnimation'

import Logo from '../../images/assets/logo.svg'
import {
  WrapperHeader,
  LineWrapper,
  Line,
  LogoWrapper,
} from '../../styles/components/header/header'
import SocialIcons from './SocialIcons'
import { myContext } from '../../../provider'

const Header = () => {
  const contextValues = useContext(myContext)
  const {
    indexTimeline,
    layoutTimeline,
    setLayoutTimeline,
    shouldLayoutAnimate,
    setShouldLayoutAnimate,
  } = contextValues

  const refLogo = useRef(null)
  const refLineWrapper = useRef(null)
  const refLineHorizontal1 = useRef(null)
  const refLineHorizontal2 = useRef(null)
  const refLineClose1 = useRef(null)
  const refLineVertical1 = useRef(null)
  const refLineVertical2 = useRef(null)
  const refLineClose2 = useRef(null)

  useEffect(() => {
    if (shouldLayoutAnimate) {
      layoutTimeline
        .addLabel('VisibilityWrapperLine')
        .set(refLineWrapper.current, {
          visibility: 'visible',
        })
      layoutTimeline.addLabel('LogoVisible').from(
        refLogo.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        'finishMenu'
      )
      layoutTimeline
        .addLabel('horizontalLineStart')
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
      layoutTimeline
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
        .staggerFrom('.item-menu', 1, { top: '100%', opacity: 0 }, 0.5, '-=1.2')
        .addLabel('finishMenu')
    }
    setLayoutTimeline(layoutTimeline)
  })

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
        <SocialIcons />
      </LineWrapper>
      <WrapperHeader>
        <nav>
          <ul>
            <li className="item-menu">
              <Link
                activeClassName="active"
                to="/"
                entry={{
                  length: 1,
                }}
                trigger={async pages => {
                  // wait until we have access to both pages
                  const exit = await pages.exit
                  const entry = await pages.entry
                  // here we can access both pages

                  // You could measure the entry element here

                  // start exit animation based on measurements if you want
                  // wait for the entering page to become visible
                  await entry.visible
                  indexTimeline.seek(0)
                  indexTimeline.play()
                }}
              >
                Bio
              </Link>
            </li>
            <li className="item-menu">
              <Link
                to="/blog/"
                exit={{
                  trigger: ({ exit, node }) => {
                    indexTimeline.reverse()
                  },
                  length: 1,
                }}
                entry={{
                  delay: 2,
                }}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </WrapperHeader>
    </>
  )
}

export default Header
