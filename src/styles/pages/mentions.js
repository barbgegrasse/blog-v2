import styled from '@emotion/styled'
import theme from '../global/theme'
import mediaQueries from '../global/mediaQueries'

const MentionsWrapper = styled('section')`
  max-width: 888px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  p {
    font-size: 24px;
    line-height: 1.7;
    margin-bottom: 32px;

    ${mediaQueries.mobile} {
      font-size: 18px;
      margin-bottom: 16px;
    }
  }

  strong {
    font-family: ${theme.fonts.title};
    text-decoration: underline;
  }

  h2 {
    font-size: 3em;
    margin-bottom: 32px;
    ${mediaQueries.desktopFlorent} {
      font-size: 2.8em;
    }
    ${mediaQueries.mobile} {
      font-size: 1.8em;
    }
  }
  h3 {
    font-size: 2.6em;
    margin-bottom: 32px;
    ${mediaQueries.desktopFlorent} {
      font-size: 2.4em;
    }
    ${mediaQueries.mobile} {
      font-size: 1.6em;
    }
  }
  h4 {
    font-size: 2.4em;
    margin-bottom: 32px;
    ${mediaQueries.desktopFlorent} {
      font-size: 2.2em;
    }
    ${mediaQueries.mobile} {
      font-size: 1.5em;
    }
  }
  h5 {
    font-size: 2.2em;
    margin-bottom: 32px;
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

export { MentionsWrapper }
