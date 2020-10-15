import React from 'react'
import styled from '@emotion/styled'
import theme from '../../../styles/global/theme'

const TopLines = styled('div')`
  position: absolute;
  top: 0;
  left: 420px;
  width: calc(100% - 420px + 20vw);
`

const TopLinesWrapper = styled('div')`
  position: relative;
  .line {
    position: relative;
    margin-top: 1px;
    width: 150px;
    height: 1px;
    background: ${theme.colors.primary};
    display: block;
  }
  .diagonal {
    transform: rotate(138deg);
    transform-origin: left;
  }
  .horizontal {
    top: -2px;
    width: 100%;
  }
`

const Lines = () => (
  <TopLines>
    <TopLinesWrapper>
      <span className="diagonal line" id="line1" />
      <span className="horizontal line" id="line2" />
    </TopLinesWrapper>
    <TopLinesWrapper>
      <span className="diagonal line" id="line3" />
      <span className="horizontal line" id="line4" />
    </TopLinesWrapper>
    <TopLinesWrapper>
      <span className="diagonal line" id="line5" />
      <span className="horizontal line" id="line6" />
    </TopLinesWrapper>
  </TopLines>
)

export default Lines
