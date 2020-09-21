import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { Power1 } from 'gsap'

import { GridHome } from '../styles/pages/home/index'
import BlockMaintTitle from '../components/home/MainTitle'
import BlockPresentation from '../components/home/BlockPresentation'
import ImgJohanPetrikovsky from '../components/images/ImgJohanPetrikovsky'

const IndexContent = ({ tl, context: { scrollPosition }, homeAnimation }) => {
  const refRightCol = useRef(null)
  const refGridHome = useRef(null)

  useEffect(() => {
    tl.set('#refGridHome', { visibility: 'visible' }, 'start')
      .addLabel('animation-profil')
      .from(
        refRightCol.current,
        {
          duration: 1,
          y: '5%',
          opacity: 0,
          ease: Power1.easeOut,
        },
        'endTown-=0.5'
      )
  }, [])

  return (
    <div id="refGridHome" ref={refGridHome} style={{ visibility: 'hidden' }}>
      <GridHome>
        <div className="left-col">
          <BlockMaintTitle homeAnimation={homeAnimation} tl={tl} />
        </div>
        <div ref={refRightCol} className="right-col">
          <ImgJohanPetrikovsky tl={tl} />
        </div>
      </GridHome>
      <div>
        <BlockPresentation homeAnimation={homeAnimation} tl={tl} />
      </div>
    </div>
  )
}

IndexContent.propTypes = {
  homeAnimation: PropTypes.bool.isRequired,
  tl: PropTypes.object.isRequired,
  context: PropTypes.object.isRequired,
}

export default IndexContent
