import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import slugify from '../../../utils/slugify'
import theme from '../../../styles/global/theme'
import mediaQueries from '../../../styles/global/mediaQueries'

const HnTitle = styled('div')`
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0 60px;

  text-align: center;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.title};
  font-weight: 200;

  ${mediaQueries.mobile} {
    text-align: left;
  }

  h2 {
    font-size: 3em;
    font-style: italic;
    ${mediaQueries.desktopFlorent} {
      font-size: 2.8em;
    }
    ${mediaQueries.mobile} {
      font-size: 1.8em;
    }
  }
  h3 {
    font-size: 2.6em;
    font-style: italic;
    ${mediaQueries.desktopFlorent} {
      font-size: 2.4em;
    }
    ${mediaQueries.mobile} {
      font-size: 1.6em;
    }
  }
  h4 {
    font-size: 2.4em;
    font-style: italic;
    ${mediaQueries.desktopFlorent} {
      font-size: 2.2em;
    }
    ${mediaQueries.mobile} {
      font-size: 1.5em;
    }
  }
  h5 {
    font-size: 2.2em;
    font-style: italic;
    ${mediaQueries.desktopFlorent} {
      font-size: 2.1em;
    }
    ${mediaQueries.mobile} {
      font-size: 1.45em;
    }
  }
  h6 {
    font-size: 2em;
    font-style: italic;
    ${mediaQueries.desktopFlorent} {
      font-size: 1.9em;
    }
    ${mediaQueries.mobile} {
      font-size: 1.4em;
    }
  }
`

const Hn = ({ slice }) => (
  <HnTitle
    id={`${slugify(slice.primary.hn.text)}`}
    dangerouslySetInnerHTML={{ __html: slice.primary.hn.html }}
  />
)

Hn.propTypes = {
  slice: PropTypes.object.isRequired,
}

export default Hn
