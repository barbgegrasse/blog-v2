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

  ${mediaQueries.tabletLandscape} {
    top: 16px;
    left: 16px;
  }
  ${mediaQueries.mobile} {
    top: 8px;
    left: 8px;
  }
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
      display: inline-block;
      margin-left: 20px;
      position: relative;
      &:hover {
        color: ${theme.colors.main};
      }
      &:after {
        content: '';
        position: absolute;
        bottom: -8px;
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${theme.border.primary};
        transform: scaleX(0);
        transition: all 0.3s ease-out;
      }

      &.active,
      &:hover {
        &:after {
          transform: scaleX(1);
        }
      }

      &:first-of-type {
        margin-left: 0;
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

  ${mediaQueries.tabletLandscape} {
    top: 16px;
    right: 16px;
    bottom: 16px;
    left: 16px;
  }
  ${mediaQueries.mobile} {
    top: 8px;
    right: 8px;
    bottom: 8px;
    left: 8px;
  }
`
const Line = styled('span')`
  position: absolute;
  display: block;

  background: ${theme.border.primary};
  &.horizontal1 {
    width: 100%;
    transform-origin: center left;
    transform: scaleX(100%);
    height: 1px;

    top: 0;
    left: 0;
  }
  &.horizontal2 {
    width: 100%;
    transform: scaleX(100%);
    height: 1px;
    transform-origin: center right;

    top: 88px;
    left: 0;
  }

  &.vertical1 {
    width: 1px;
    height: 100%;
    transform-origin: bottom right;
    transform: scaleY(100%);

    top: 0;
    left: 0;
  }

  &.vertical2 {
    width: 1px;
    height: 100%;
    transform-origin: top left;
    transform: scaleY(100%);

    top: 0;
    left: 88px;
  }

  &.close1 {
    width: 1px;
    height: 88px;
    transform-origin: top left;
    transform: scaleY(1);

    top: 0%;
    right: 0;
  }

  &.close2 {
    width: 88px;
    height: 1px;
    transform-origin: center left;
    transform: scaleX(1);

    bottom: 0;
    left: 0;
  }
`

export { Line, LineWrapper, LogoWrapper, WrapperHeader }
