import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const HighLightContainer = styled('span')`
  max-width: 1000px;
  display: block;
`

export default function HighLight({ slice }) {
  return (
    <HighLightContainer
      style={{ padding: '20px' }}
      dangerouslySetInnerHTML={{ __html: slice.primary.highlight_title.html }}
    />
  )
}

HighLight.propTypes = {
  slice: PropTypes.object.isRequired,
}
