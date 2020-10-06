import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      MMMMMMMMMMMMMNd,:0WMWXo,lKWMMMMMMMMMMMMM
      MMMMMMMMMMMNOc..:OXko:...;xXMMMMMMMMMMMM
      MMMMMMMMMNOc..;x0k:...,c;..;xXMMMMMMMMMM
      MMMMMMMNOc..;x0k:..,:oKWXx;..;xXMMMMMMMM
      MMMMMNOc..;x0k:..,dKWWMMMMXx;..;xXMMMMMM
      MMMNOc..;x0k:..,dKWMMMMMMMMMXx;..;xXMMMM
      MNk:..;x0k:..,dKWMMMMMMMMMMMMMXk:..;xXMM
      k:..;x0x:..,dKWMMMMMMMMMMMMMMMMMNk:..;xX
      :..'dKk,..'dNMMMMMMMMMMMMMMMMMMMMWO;..'o
      Xx;..:xkl'.'l0WMMMMMMMMMMMMMMMMWKd,..:kN
      MWXx;..:xkl'.'l0WMMMMMMMMMMMMWKd,..:kNMM
      MMMMXx;..;xkl'.'l0WMMMMMMMMWKd,..:kNMMMM
      MMMMMMXx;..;dkl'.'l0XWMMMWKo,..:kNMMMMMM
      MMMMMMMMXx;..;dko'.';l0NKo,..:kNMMMMMMMM
      MMMMMMMMMMXx;..;dko,..';'..:kNMMMMMMMMMM
      MMMMMMMMMMMMXx;..oXKOo,..:kNMMMMMMMMMMMM
      MMMMMMMMMMMMMMKlc0WMMWOcdXMMMMMMMMMMMMMM
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body
        style={{ backgroundColor: '#1c1c21', visibility: 'hidden' }}
        {...props.bodyAttributes}
      >
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
