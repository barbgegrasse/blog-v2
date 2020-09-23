import PropTypes from 'prop-types'
import React, { useRef, useEffect, useContext } from 'react'
import { Power1 } from 'gsap'

import { GridHome } from '../styles/pages/home/index'
import BlockMaintTitle from '../components/home/MainTitle'
import BlockPresentation from '../components/home/BlockPresentation'
import ImgJohanPetrikovsky from '../components/images/ImgJohanPetrikovsky'
import { myContext } from '../../provider'

const IndexContent = () => {
  const refRightCol = useRef(null)
  const refGridHome = useRef(null)
  const contextValues = useContext(myContext)

  const tl = contextValues.globalTimeline
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
    <>
      <div id="refGridHome" ref={refGridHome} style={{ visibility: 'hidden' }}>
        <GridHome>
          <div className="left-col">
            <BlockMaintTitle tl={tl} />
          </div>
          <div ref={refRightCol} className="right-col">
            <ImgJohanPetrikovsky tl={tl} />
          </div>
        </GridHome>
        <div>
          <BlockPresentation tl={tl} />
        </div>
      </div>
    </>
  )
}

export default IndexContent
