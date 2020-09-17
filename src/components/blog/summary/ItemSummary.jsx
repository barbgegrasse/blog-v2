import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import slugify from '../../../utils/slugify'

import theme from '../../../styles/global/theme'
import mediaQueries from '../../../styles/global/mediaQueries'

const Item = styled('li')`
  &.item-summaryh2 {
    margin-top: 16px;
  }
  &.item-summaryh3 {
    font-size: 0.95em;
    margin-left: 16px;
  }
  &.item-summaryh4 {
    font-size: 0.9em;
    margin-left: 32px;
  }
  &.item-summaryh5 {
    margin-left: 64px;
    margin-bottom: 4px;
  }
  &.item-summaryh6 {
    margin-left: 128px;
  }
`
const ItemSummary = ({ slice }) => (
  <Item className={`item-summary${slice.primary.hn.html.substring(1, 3)}`}>
    <a href={`#${slugify(slice.primary.hn.text)}`}>{slice.primary.hn.text}</a>
  </Item>
)

ItemSummary.propTypes = {
  slice: PropTypes.element.isRequired,
}

export default ItemSummary
