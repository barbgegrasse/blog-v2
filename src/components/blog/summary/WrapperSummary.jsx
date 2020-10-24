import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import ItemSummary from './ItemSummary'
import theme from '../../../styles/global/theme'

const Wrapper = styled('nav')`
  max-width: ${theme.maxWidthContent};
  margin: 64px auto 64px auto;
  padding-left: 64px;
  border-left: 1px solid ${theme.border.primary};

  .title {
    font-size: 32px;
    font-family: ${theme.fonts.title};
  }

  ul {
    padding: 0 0 0 3px;
    margin: 0;
    list-style-type: none;
  }

  .item-summaryh4 ~ .item-summaryh3:first-of-type {
    margin-top: 8px;
  }
`

const WrapperSummary = ({ slices }) => (
  <Wrapper aria-labelledby="summary-title">
    <p id="summary-title" className="title">
      Sommaire
    </p>
    <ul>
      {slices.map(slice => {
        const result = (() => {
          if (slice.__typename === 'PrismicPostPostBodyHn') {
            return (
              <ItemSummary
                style={{ contentVisibility: 'auto' }}
                slice={slice}
              />
            )
          }
        })()
        return result
      })}
    </ul>
  </Wrapper>
)

WrapperSummary.propTypes = {
  handleSummaryClick: PropTypes.func.isRequired,
  slices: PropTypes.object.isRequired,
}

export default WrapperSummary
