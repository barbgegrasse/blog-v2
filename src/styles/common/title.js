import styled from '@emotion/styled'
import theme from '../global/theme'
import mediaQueries from '../global/mediaQueries'

const MainTitle = styled('h1')`
  margin-bottom: 1em;

  text-align: center;
  font-size: max(4.8vw, 45px);

  line-height: 1.1;
  overflow: hidden;

  ${mediaQueries.desktopFlorent} {
    font-size: max(4.7vw, 45px);
  }
`

const LineTitle = styled('h2')`
  position: relative;
  margin-bottom: 64px;

  text-align: left;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  font-size: min(4.8vw, 55px);
  font-family: ${theme.fonts.title};

  line-height: 1.1;

  &:after {
    content: '';
    position: absolute;
    left: 0%;
    bottom: -16px;
    width: 140px;
    height: 7px;
    clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
    background-image: linear-gradient(
      90deg,
      ${theme.colors.primary} 50%,
      ${theme.bg.main}
    );
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: -8px;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(
      90deg,
      ${theme.colors.primary},
      ${theme.bg.main} 75%
    );
  }

  ${mediaQueries.tabletLandscape} {
    margin-bottom: 32px;
  }

  ${mediaQueries.desktopFlorent} {
    margin-bottom: 16px;
  }
`

export { MainTitle, LineTitle }
