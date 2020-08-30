import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const PostSlice = styled('div')`
  text-align: center;
  padding: 2rem 0;
`

export default function Image({ slice }) {
  console.log('Image -> slice', slice)

  return (
    <PostSlice>
      <Img
        style={{
          margin: '0 auto',
          maxWidth: slice.primary.image.dimensions.width,
          maxHeight: slice.primary.image.dimensions.height,
        }}
        fluid={slice.primary.image.localFile.childImageSharp.fluid}
      />
    </PostSlice>
  )
}

Image.propTypes = {
  slice: PropTypes.element.isRequired,
}
