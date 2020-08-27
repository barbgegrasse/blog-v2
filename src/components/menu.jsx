import React from 'react'
import { Link, Image } from 'gatsby'
import { Close } from '../icons/icons'
import thumbnail from '../images/gatsby-astronaut.png'

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
                <div className="title">
                  <h2>
                    <div className="text">Un</div>{' '}
                  </h2>
                </div>
                <div className="thumbnail">
                  <Image src={thumbnail} />
                </div>
                <div className="floating-image">this is a floating image</div>
                <div className="line right"></div>
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
