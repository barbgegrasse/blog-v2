import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { Expo } from 'gsap'
import SplitText from 'gsap/SplitText'
import { SubTitle } from '../../styles/pages/home/index'
import { MainTitle } from '../../styles/common/title'

const BlockMainTitle = ({ tl, homeAnimation }) => {
  const refJob = useRef(null)
  const refTitle2 = useRef(null)

  console.info('test')
  useEffect(() => {
    const split = new SplitText(refJob)
    console.info(split, refJob)
    // if (homeAnimation) {
    // tl.current.from(
    //   refJob.current,
    //   1,
    //   {
    //     opacity: 0,
    //     y: '50%',
    //     ease: Expo.easeInOut,
    //   },
    //   '-=0.8'
    // )
    // tl.current.from(
    //   refTitle2.current,
    //   1,
    //   {
    //     opacity: 0,
    //     y: '50%',
    //     ease: Expo.easeInOut,
    //   },
    //   '-=0.8'
    // )
    // }
  })

  return (
    <>
      <SubTitle>Johan Petrikovsky</SubTitle>
      <MainTitle as="h1">
        <span ref={refJob} className="highlight">
          Développeur Web
        </span>
        <span className="toulouse">à Toulouse</span>
        {/* <span className="hide-text">
        <span className="d-block" ref={refJob}>
 
        </span>
      </span>
      <span className="hide-text">
        <span className="d-block" ref={refTitle2}>
          
        </span>
      </span> */}
      </MainTitle>
    </>
  )
}

BlockMainTitle.propTypes = {
  homeAnimation: PropTypes.bool.isRequired,
  tl: PropTypes.object.isRequired,
}

export default BlockMainTitle
