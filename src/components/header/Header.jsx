import PropTypes from 'prop-types'
import Link from 'gatsby-plugin-transition-link'
import React, { useRef, useEffect, useContext } from 'react'

import { Power1 } from 'gsap'
import { myContext } from '../../../provider'
import Logo from '../../images/assets/logo.svg'
import {
  WrapperHeader,
  LineWrapper,
  Line,
  LogoWrapper,
} from '../../styles/components/header/header'
import SocialIcons from './SocialIcons'

const Header = () => {
  const refLogo = useRef(null)
  const refLineWrapper = useRef(null)
  const refLineHorizontal1 = useRef(null)
  const refLineHorizontal2 = useRef(null)
  const refLineClose1 = useRef(null)
  const refLineVertical1 = useRef(null)
  const refLineVertical2 = useRef(null)
  const refLineClose2 = useRef(null)

  return (
    <>
      <LineWrapper ref={refLineWrapper}>
        <LogoWrapper id="logo-wrapper" ref={refLogo}>
          <Logo />
        </LogoWrapper>
        <SocialIcons />
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
            <li className="item-menu">
              <Link
                activeClassName="active"
                to="/"
                // entry={{
                //   trigger: ({ exit, node }) => {
                //     tl.tweenFromTo('finishLine', 'endTown')
                //   },
                // }}
                // exit={{
                //   trigger: ({ exit, node }) => {
                //     tl.tweenFromTo('finishLine', 'endTown')
                //   },
                //   length: 1,
                // }}
              >
                Bio
              </Link>
            </li>
            <li className="item-menu">
              <Link
                to="/blog/"
                // exit={{
                //   trigger: ({ exit, node }) => {
                //     tl.tweenFromTo('endTown', 'finishLine')
                //   },
                //   length: 1,
                // }}
                // entry={{
                //   delay: 1,
                // }}
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

Header.propTypes = {
  tl: PropTypes.shape({
    addLabel: PropTypes.func,
  }),
}

export default Header
