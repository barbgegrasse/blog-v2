import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const ImageWrapper = styled('div')`
  margin-bottom: 60px;
`

export default function Image({ slice }) {
  console.log('Image -> slice', slice)

  return (
    <ImageWrapper>
      <Img
        style={{
          margin: '0 auto',
          maxWidth: slice.primary.image.dimensions.width,
          maxHeight: slice.primary.image.dimensions.height,
        }}
        fluid={slice.primary.image.localFile.childImageSharp.fluid}
      />
    </ImageWrapper>
  )
}

Image.propTypes = {
  slice: PropTypes.element.isRequired,
}
