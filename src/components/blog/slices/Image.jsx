import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const ImageWrapper = styled('div')`
  margin-bottom: 60px;
`

export default function Image({ slice }) {
  return (
    <ImageWrapper>
      <Img
        alt={slice.primary.image.alt}
        style={{
          margin: '0 auto',
          width: 'auto',
          height: 'auto',
          maxWidth: slice.primary.image.dimensions.width,
          maxHeight: slice.primary.image.dimensions.height,
        }}
        imgStyle={{
          maxWidth: '100%',
          height: 'auto',
        }}
        durationFadeIn={250}
        fluid={slice.primary.image.localFile.childImageSharp.fluid}
      />
    </ImageWrapper>
  )
}

Image.propTypes = {
  slice: PropTypes.element.isRequired,
}
