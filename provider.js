import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'
import gsap from 'gsap'

export const myContext = React.createContext()

const ProviderComponent = ({ children }) => {
  const { current: layoutTL } = useRef(gsap.timeline({ paused: true }))
  const { current: indexTL } = useRef(gsap.timeline({ paused: true }))
  const { current: blogTL } = useRef(gsap.timeline({ paused: true }))

  const [shouldLayoutAnimate, setShouldLayoutAnimate] = useState(true)
  const [layoutTimeline, setLayoutTimeline] = useState(layoutTL)
  const [indexTimeline, setIndexTimeline] = useState(indexTL)
  const [blogTimeline, setBlogTimeline] = useState(blogTL)

  return (
    <myContext.Provider
      value={{
        shouldLayoutAnimate,
        setShouldLayoutAnimate: bool => setShouldLayoutAnimate(bool),

        layoutTimeline,
        setLayoutTimeline: tl => setLayoutTimeline(tl),

        indexTimeline,
        setIndexTimeline: tl => setIndexTimeline(tl),

        blogTimeline,
        setBlogTimeline: tl => setBlogTimeline(tl),
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
