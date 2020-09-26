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

const BlockMainTitle = () => {
  const refJob = useRef(null)
  const refName = useRef(null)
  const refSep = useRef(null)
  const refTown = useRef(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
