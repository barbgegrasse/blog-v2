import PropTypes from 'prop-types'
import React, { useState } from 'react'
import gsap from 'gsap'

export const myContext = React.createContext()

const ProviderComponent = ({ children }) => {
  const [homeAnimation, setHomeAnimation] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [damping, setdamping] = useState(0.2) // Set scroll harschness
  const [globalTimeline, setGlobalTimeline] = useState(
    gsap.timeline({ paused: true })
  ) // Global Timeline for animation

  return (
    <myContext.Provider
      value={{
        homeAnimation,
        changeHomeAnimation: bool => setHomeAnimation(bool),
        scrollPosition,
        updateScroll: newScrollPosition => setScrollPosition(newScrollPosition),
        damping,
        updateDamping: dampingValue => setdamping(dampingValue),
        globalTimeline,
        setGlobalTimeline: tl => setGlobalTimeline(tl),
      }}
    >
      {children}
    </myContext.Provider>
  )
}

ProviderComponent.propTypes = {
  children: PropTypes.object.isRequired,
}

const Provider = ({ element }) => (
  <ProviderComponent>{element}</ProviderComponent>
)

Provider.propTypes = {
  element: PropTypes.node.isRequired,
}

export default Provider
