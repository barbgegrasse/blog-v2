import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styled from '@emotion/styled'

const CodeSnippet = styled('div')`
  display: block;
  padding: 40px 0;
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
