import React, { useContext } from 'react'
import Link from 'gatsby-plugin-transition-link'
import { myContext } from '../../../../provider'

const BlogLink = () => {
  const contextValues = useContext(myContext)
  const { indexTimeline } = contextValues

  return (
    <Link
      to="/blog/"
      exit={{
        trigger: () => {
          indexTimeline.timeScale(1.5)
          indexTimeline.reverse()
        },
        length: 0.5,
      }}
      // entry={{
      //   delay: 2,
      // }}
    >
      Blog
    </Link>
  )
}

export default BlogLink
