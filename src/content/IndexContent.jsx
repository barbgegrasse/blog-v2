import PropTypes from 'prop-types'
import React, { useRef, useEffect, useContext } from 'react'
import gsap from 'gsap'

import { GridHome } from '../styles/pages/home/index'
import BlockMaintTitle from '../components/home/MainTitle'
import BlockPresentation from '../components/home/BlockPresentation'
import ImgJohanPetrikovsky from '../components/images/ImgJohanPetrikovsky'
import { myContext } from '../../provider'
import profilAnimation from '../animation/index/profilAnimation'
import mainTitleAnimation from '../animation/index/mainTitleAnimation'

const IndexContent = () => {
  const contextValues = useContext(myContext)

  const { layoutAnimation, setLayoutAnimation } = contextValues

  const { current: indexTl } = useRef(gsap.timeline({ paused: true }))
  useEffect(() => {
    if (layoutAnimation) {
      indexTl.add(mainTitleAnimation(), '+=2')
      setLayoutAnimation(false)
    } else {
      indexTl.add(mainTitleAnimation())
    }
    indexTl.add(profilAnimation(), '-=0.5')
    indexTl.play()
  }, [])

  return (
    <>
      <div>
        <GridHome>
          <div className="left-col">
            <BlockMaintTitle />
          </div>
          <div id="right-col" className="right-col">
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
