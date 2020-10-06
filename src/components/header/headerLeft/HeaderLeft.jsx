import React from 'react'
import Link from 'gatsby-plugin-transition-link'

import { WrapperHeaderLeft } from '../../../styles/components/header/headerLeft'

const HeaderLeft = () => (
  <WrapperHeaderLeft>
    <nav>
      <ul>
        <li>
          <Link
            to="https://wwww.github.com/ptrkvsky"
            rel="nofollow noopener noreferrer"
          >
            Github
          </Link>
        </li>
        <li>
          <Link to="/blog/">Contact</Link>
        </li>
      </ul>
    </nav>
  </WrapperHeaderLeft>
)

export default HeaderLeft
