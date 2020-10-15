import React from 'react'
import styled from '@emotion/styled'
import TopLines from './TopLines'
import mediaQueries from '../../../styles/global/mediaQueries'

const LinesWrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${mediaQueries.mobile} {
    display: none;
  }
`

const Lines = () => (
  <LinesWrapper className="lines">
    <TopLines />
  </LinesWrapper>
)

export default Lines
