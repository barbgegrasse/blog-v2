import React, { useContext } from 'react'
import Link from 'gatsby-plugin-transition-link'
import { myContext } from '../../../../provider'

const HomeLink = () => {
  const contextValues = useContext(myContext)
  const { blogTimeline } = contextValues

  const exitTransition = {
    trigger: () => {
      blogTimeline.timeScale(1.5)
      blogTimeline.reverse()
    },
    length: 0.5,
  }

  return (
    <Link to="/" exit={exitTransition}>
      Bio
    </Link>
  )
}

export default HomeLink
