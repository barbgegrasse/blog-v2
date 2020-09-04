import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const myContext = React.createContext()

const Provider = ({ children }) => {
  const [homeAnimation, setHomeAnimation] = useState(true)

  return (
    <myContext.Provider
      value={{
        homeAnimation,
        changeHomeAnimation: bool => setHomeAnimation(bool),
      }}
    >
      {children}
    </myContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.object.isRequired,
}

export default ({ element }) => <Provider>{element}</Provider>
