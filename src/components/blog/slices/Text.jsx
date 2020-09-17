import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'
import theme from '../../../styles/global/theme'

const PostSlice = styled('div')`
  max-width: ${theme.maxWidthContent};
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  p {
    margin-bottom: 40px;
  }
`

export default function Text({ slice }) {
  return (
    <PostSlice
      dangerouslySetInnerHTML={{ __html: slice.primary.rich_text.html }}
    />
  )
}

Text.propTypes = {
  slice: PropTypes.element.isRequired,
}
