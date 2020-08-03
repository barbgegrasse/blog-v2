import React from 'react'
import { Link } from 'gatsby'
import { Close } from '../icons/icons'

const Menu = () => (
  <div className="products">
    <div className="menu-title">Products</div>
    <div className="close">
      <Close />
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">
            <div className="wrapper">
              <div className="line left">
                <div className="mask"></div>
              </div>
            </div>
          </Link>
        </li>
        <li>test 2</li>
      </ul>
    </nav>
  </div>
)

export default Menu
