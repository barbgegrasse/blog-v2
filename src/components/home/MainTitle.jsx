import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { gsap, Power3 } from 'gsap'
import SplitText from 'gsap/SplitText'
import { SubTitle } from '../../styles/pages/home/index'
import { MainTitle } from '../../styles/common/title'

// TypeError: Failed to execute 'getComputedStyle' on 'Window': parameter 1 is not of type 'Element'
// https://greensock.com/forums/topic/20512-drawsvg-build-failed-gatsby/
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(SplitText)
// }

const BlockMainTitle = ({ tl }) => {
  const refJob = useRef(null)
  const refName = useRef(null)
  const refSep = useRef(null)
  const refTown = useRef(null)

  const tlSettings = {
    staggerValue: 0.014,
    charsDuration: 0.5,
  }

  useEffect(() => {
    // TypeError: Failed to execute 'getComputedStyle' on 'Window': parameter 1 is not of type 'Element'
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(SplitText)

      const splitJob = new SplitText(refJob.current, {
        type: 'chars',
        position: 'relative',
      })
      const charsJob = splitJob.chars

      const splitName = new SplitText(refName.current, {
        type: 'chars',
        position: 'relative',
      })
      const charsName = splitName.chars

      const splitTown = new SplitText(refTown.current, {
        type: 'chars',
        position: 'relative',
      })
      const charsTown = splitTown.chars

      tl.addLabel('splitName')
        .from(
          refSep.current,
          {
            scaleX: 0,
            duration: 0.25,
            delay: 0.5,
            ease: Power3.easeIn,
          },
          'finishLine-=0.8'
        )
        .staggerFrom(
          charsName,
          tlSettings.charsDuration,
          {
            ease: Power3.easeOut,
            y: '+100%',
          },
          tlSettings.staggerValue
        )
        .addLabel('splitjob')
        .staggerFrom(
          charsJob,
          tlSettings.charsDuration,
          {
            ease: Power3.easeOut,
            y: '+100%',
          },
          tlSettings.staggerValue,
          '-=0.5'
        )
        .addLabel('splitTown')
        .staggerFrom(
          charsTown,
          tlSettings.charsDuration,
          {
            ease: Power3.easeOut,
            y: '+100%',
          },
          tlSettings.staggerValue,
          '-=0.5'
        )
        .addLabel('endTown')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <SubTitle ref={refName}>
        Johan Petrikovsky
        <span ref={refSep} className="sep" />
      </SubTitle>
      <MainTitle as="h1">
        <div ref={refJob} className="highlight">
          Développeur Web
        </div>
        <div ref={refTown} className="toulouse">
          à Toulouse
        </div>
      </MainTitle>
    </>
  )
}

BlockMainTitle.propTypes = {
  tl: PropTypes.shape({
    addLabel: PropTypes.func.isRequired,
  }),
}

export default BlockMainTitle
