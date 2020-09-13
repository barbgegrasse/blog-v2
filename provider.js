import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const myContext = React.createContext()

const ProviderComponent = ({ children }) => {
  const [homeAnimation, setHomeAnimation] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)

  return (
    <myContext.Provider
      value={{
        homeAnimation,
        changeHomeAnimation: bool => setHomeAnimation(bool),
        scrollPosition,
        updateScroll: newScrollPosition => setScrollPosition(newScrollPosition),
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
