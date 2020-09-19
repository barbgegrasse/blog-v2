import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { Power1 } from 'gsap'

import { GridHome } from '../styles/pages/home/index'
import BlockMaintTitle from '../components/home/MainTitle'
import BlockPresentation from '../components/home/BlockPresentation'
import ImgJohanPetrikovsky from '../components/images/ImgJohanPetrikovsky'
import Overlay from '../components/home/Overlay'

const IndexContent = ({ tl, context: { scrollPosition }, homeAnimation }) => {
  const refRightCol = useRef(null)

  useEffect(() => {
    tl.addLabel('animation-profil').from(
      refRightCol.current,
      {
        duration: 0.5,
        y: '5%',
        opacity: 0,
        ease: Power1.easeInOut,
      },
      'endTown'
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
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
    </>
  )
}

IndexContent.propTypes = {
  homeAnimation: PropTypes.bool.isRequired,
  tl: PropTypes.object.isRequired,
  context: PropTypes.object.isRequired,
}

export default IndexContent
