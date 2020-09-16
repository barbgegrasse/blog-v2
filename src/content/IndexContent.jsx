import PropTypes from 'prop-types'
import React from 'react'

import { GridHome } from '../styles/pages/home/index'
import BlockMaintTitle from '../components/home/MainTitle'
import BlockPresentation from '../components/home/BlockPresentation'
import ImgJohanPetrikovsky from '../components/images/ImgJohanPetrikovsky'
import Overlay from '../components/home/Overlay'

const IndexContent = ({
  tl,
  context: { scrollPosition },
  homeAnimation,
  timeline,
}) => {
  return (
    <>
      <GridHome>
        <div
          className="left-col"
          style={{
            position: 'relative',
            transform: `translate3d(0, ${scrollPosition / 4}px, 0)`,
          }}
        >
          <BlockMaintTitle homeAnimation={homeAnimation} tl={tl} />
        </div>
        <div
          className="right-col"
          style={{
            position: 'relative',
            transform: `translate3d(0, ${scrollPosition / 2}px, 0)`,
          }}
        >
          <ImgJohanPetrikovsky />
        </div>
      </GridHome>
      <div
        style={{
          position: 'relative',
          transform: `translate3d(0, ${scrollPosition / 2}px, 0)`,
        }}
      >
        <BlockPresentation homeAnimation={homeAnimation} tl={tl} />
      </div>
    </>
  )
}

IndexContent.propTypes = {
  homeAnimation: PropTypes.bool.isRequired,
  timeline: PropTypes.string.isRequired,
  tl: PropTypes.object.string.isRequired,
  context: PropTypes.object.isRequired,
}

export default IndexContent
