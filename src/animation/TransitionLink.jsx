import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'

const LinkAnimation = (props, { children }) => (
  <TransitionLink
    exit={{
      trigger: ({ exit, node }) => console.log(exit, node),
    }}
    entry={{
      length: 0,
      trigger: ({ exit, node }) => console.log(exit, node),
    }}
    {...props}
  >
    {children}
  </TransitionLink>
)

export default LinkAnimation
