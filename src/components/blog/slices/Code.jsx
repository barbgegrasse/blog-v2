import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styled from '@emotion/styled'
import mediaQueries from '../../../styles/global/mediaQueries'

const CodeSnippet = styled('div')`
  display: block;
  padding: 0 0 32px 0;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  ${mediaQueries.tabletLandscape} {
    padding: 0 0 16px 0;
  }

  ${mediaQueries.mobile} {
    padding: 0 0 8px 0;
  }
`
export default function Code({ slice }) {
  const codeString = slice.primary.code_snippet.text
  const language = slice.primary.code_snippet.text
  return (
    <CodeSnippet>
      <SyntaxHighlighter language={language} style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </CodeSnippet>
  )
}

Code.propTypes = {
  slice: PropTypes.element.isRequired,
}
