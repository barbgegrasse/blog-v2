import React, { useRef, useEffect, useContext } from 'react'
import { Power1 } from 'gsap'

import { GridHome } from '../styles/pages/home/index'
import BlockMaintTitle from '../components/home/MainTitle'
import BlockPresentation from '../components/home/BlockPresentation'
import ImgJohanPetrikovsky from '../components/images/ImgJohanPetrikovsky'
import { myContext } from '../../provider'
// import profilAnimation from '../animation/index/profilAnimation'
// import mainTitleAnimation from '../animation/index/mainTitleAnimation'

const IndexContent = () => {
  const refIndexContent = useRef(null)
  const refRightCol = useRef(null)
  const contextValues = useContext(myContext)
  const { indexTimeline, setIndexTimeline } = contextValues

  useEffect(() => {
    indexTimeline.set(refIndexContent.current, { visibility: 'visible' })

    indexTimeline.addLabel('animation-profil').from(
      refRightCol.current,
      {
        duration: 0.8,
        y: '+=2%',
        opacity: 0,
        ease: Power1.easeOut,
      },
      '-=0.5'
    )

    setIndexTimeline(indexTimeline)
    indexTimeline.play()
  }, [])

  return (
    <>
      <div ref={refIndexContent}>
        <GridHome>
          <div className="left-col">
            <BlockMaintTitle />
          </div>
          <div ref={refRightCol}>
            <ImgJohanPetrikovsky />
          </div>
        </GridHome>
        <div>
          <BlockPresentation />
        </div>
      </div>
    </>
  )
}

export default IndexContent
