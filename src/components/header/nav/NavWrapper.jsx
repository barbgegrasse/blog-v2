import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-plugin-transition-link'
import gsap, { Expo } from 'gsap'
import { myContext } from '../../../../provider'
import BlogLink from './BlogLink'
import HomeLink from './HomeLink'

const NavWrapper = () => (
  <nav>
    <ul>
      <li className="item-menu">
        <HomeLink />
      </li>
      <li className="item-menu">
        <BlogLink />
      </li>
    </ul>
  </nav>
)

export default NavWrapper
