import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../../styles/global/theme'

const HnTitle = styled('div')`
  width: ${theme.maxWidthContent};
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;

  color: ${theme.colors.primary};
  font-family: ${theme.fonts.title};
  font-weight: 200;

  h2 {
    font-size: 3em;
    font-style: italic;
  }
  h3 {
    font-size: 2.6em;
    font-style: italic;
  }
  h4 {
    font-size: 2.4em;
    font-style: italic;
  }
  h5 {
    font-size: 2.2em;
    font-style: italic;
  }
  h6 {
    font-size: 2em;
    font-style: italic;
  }
`

const Hn = ({ slice }) => <HnTitle dangerouslySetInnerHTML={{ __html: slice.primary.hn.html }}></HnTitle>

Hn.propTypes = {
  slice: PropTypes.element.isRequired,
}

export default Hn
