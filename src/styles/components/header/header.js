import styled from '@emotion/styled'
import theme from '../../global/theme'
import mediaQueries from '../../global/mediaQueries'

const WrapperHeader = styled('div')`
  z-index: 990;
  position: fixed;
  top: 32px;
  left: 32px;

  width: calc(100% - 64px);
  padding: 0 0 0 88px;
  display: flex;
  align-items: center;

  height: 88px;

  margin-left: auto;
  margin-right: auto;

  mix-blend-mode: exclusion;
  nav {
    display: flex;
    flex-grow: 1;
    ul {
      display: flex;
      justify-content: flex-end;
      flex-grow: 1;
      li {
        margin-right: 32px;
      }
    }
    a {
      color: ${theme.colors.main};
      margin-left: 20px;
      &:first-of-type {
        margin-left: 0;
      }
      &:hover {
        color: ${theme.colors.secondary};
      }
    }
  }
`

const LogoWrapper = styled('div')`
  width: 88px;
  height: 88px;
  svg {
    fill: #fff;
  }
`

const LineWrapper = styled('div')`
  z-index: 990;
  mix-blend-mode: exclusion;
  position: fixed;
  top: 32px;
  right: 32px;
  bottom: 32px;
  left: 32px;
  pointer-events: none;
`
const Line = styled('span')`
  position: absolute;
  display: block;

  background: #7d7d7d;
  &.horizontal1 {
    width: 0;
    height: 1px;

    top: 0;
    left: 0;
  }
  &.horizontal2 {
    width: 0;
    height: 1px;

    top: 88px;
    left: 0;
    background-color: #fff;
  }
  &.close1 {
    width: 1px;
    height: 0px;

    top: 0%;
    right: 0;
  }

  &.vertical1 {
    width: 1px;
    height: 0%;

    top: 0;
    left: 0;
  }
  &.vertical2 {
    width: 1px;
    height: 0%;

    top: 0;
    left: 88px;
  }
  &.close2 {
    height: 1px;
    width: 0;

    bottom: 0;
    left: 0;
  }
`

export { WrapperHeader, Line, LineWrapper, LogoWrapper }
