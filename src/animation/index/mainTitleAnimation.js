import { gsap, Power3, useEffect } from 'gsap'
import SplitText from 'gsap/SplitText'

const mainTitle = () => {
  const tlSettings = {
    staggerValue: 0.014,
    charsDuration: 0.5,
  }

  const tl = gsap.timeline()

  // TypeError: Failed to execute 'getComputedStyle' on 'Window': parameter 1 is not of type 'Element'
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText)

    const splitJob = new SplitText('#refJob', {
      type: 'chars',
      position: 'relative',
    })
    const charsJob = splitJob.chars

    const splitName = new SplitText('#refName', {
      type: 'words',
      position: 'relative',
    })
    const wordsName = splitName.words

    const splitTown = new SplitText('#refTown', {
      type: 'chars',
      position: 'relative',
    })
    const charsTown = splitTown.chars

    tl.addLabel('splitName')
      .from('#refSep', {
        scaleX: 0,
        duration: 0.5,
        ease: Power3.easeIn,
      })
      .staggerFrom(
        wordsName,
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

  return tl
}

export default mainTitle
