import PropTypes from 'prop-types'
import React, { useRef, useEffect, useContext } from 'react'
import { gsap, Power3 } from 'gsap'
import SplitText from 'gsap/SplitText'
import { SubTitle, MainTitle } from '../../styles/pages/home/index'
import { myContext } from '../../../provider'
// TypeError: Failed to execute 'getComputedStyle' on 'Window': parameter 1 is not of type 'Element'
// https://greensock.com/forums/topic/20512-drawsvg-build-failed-gatsby/
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(SplitText)
// }

const BlockMainTitle = () => {
  const refJob = useRef(null)
  const refName = useRef(null)
  const refSep = useRef(null)
  const refTown = useRef(null)

  const tlSettings = {
    staggerValue: 0.014,
    charsDuration: 0.5,
  }

  const contextValues = useContext(myContext)
  const { indexTimeline, setIndexTimeline } = contextValues

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

      indexTimeline
        .from(
          refSep.current,
          {
            scaleX: 0,
            duration: 0.25,
            ease: Power3.easeIn,
          },
          '-=0'
        )
        .addLabel('splitName')
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

      setIndexTimeline(indexTimeline)
    }
  }, [])

  return (
    <>
      <SubTitle id="refName" ref={refName}>
        Johan Petrikovsky
        <span
          id="refSep"
          ref={refSep}
          className="sep"
          aria-label="separation"
        />
      </SubTitle>
      <MainTitle as="h1">
        <div id="refJob" ref={refJob} className="highlight">
          Développeur Web
        </div>
        <div id="refTown" ref={refTown} className="toulouse">
          à Toulouse
        </div>
      </MainTitle>
    </>
  )
}

export default BlockMainTitle
