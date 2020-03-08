import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const HnTitle = styled('span')`
  max-width: 1000px;
  display: block;
`

export default function HighLight({ slice }) {
  return (
    <HnTitle
      style={{ padding: '20px' }}
      dangerouslySetInnerHTML={{ __html: slice.primary.highlight_title.html }}
    ></HnTitle>
  )
}

HighLight.propTypes = {
  slice: PropTypes.element.isRequired,
}
