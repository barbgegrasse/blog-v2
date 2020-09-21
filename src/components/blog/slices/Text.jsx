import React from 'react'
import PropTypes from 'prop-types'
import { ClassicText } from '../../../styles/common/text'

export default function Text({ slice }) {
  return (
    <ClassicText
      dangerouslySetInnerHTML={{ __html: slice.primary.rich_text.html }}
    />
  )
}

Text.propTypes = {
  slice: PropTypes.element.isRequired,
}
