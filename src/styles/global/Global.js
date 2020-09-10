import React from 'react'
import { Global, css } from '@emotion/core'
import theme from './theme'
import mediaQueries from './mediaQueries'

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        /* RESET CSS ERIC MEYER */
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        /* FONTS */

        @font-face {
          font-family: 'Monument Grotesk';
          src: url('../../../static/fonts/monument/MonumentGrotesk-Regular.eot');
          src: local('Monument Grotesk Regular'),
            local('../../../static/fonts/monument/MonumentGrotesk-Regular'),
            url('../../../static/fonts/monument/MonumentGrotesk-Regular.eot?#iefix')
              format('embedded-opentype'),
            url('../../../static/fonts/monument/MonumentGrotesk-Regular.woff2')
              format('woff2'),
            url('../../../static/fonts/monument/MonumentGrotesk-Regular.woff')
              format('woff'),
            url('../../../static/fonts/monument/MonumentGrotesk-Regular.ttf')
              format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'Monument Grotesk Bold';
          src: url('../../../static/fonts/monument/MonumentGrotesk-Bold.eot');
          src: local('Monument Grotesk Bold'), local('MonumentGrotesk-Bold'),
            url('../../../static/fonts/monument/MonumentGrotesk-Bold.eot?#iefix')
              format('embedded-opentype'),
            url('../../../static/fonts/monument/MonumentGrotesk-Bold.woff2')
              format('woff2'),
            url('../../../static/fonts/monument/MonumentGrotesk-Bold.woff')
              format('woff'),
            url('../../../static/fonts/monument/MonumentGrotesk-Bold.ttf')
              format('truetype');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }

        body {
          min-height: 100vh;

          background: ${theme.bg.main};
          color: ${theme.colors.main};

          font-family: ${theme.fonts.main};
          font-size: 0.972vw;
          font-size: clamp(1.2rem, 0.972vw, 2.8rem);
          font-style: normal;

          line-height: 1.389vw;
          letter-spacing: 0.02em;

          ${mediaQueries.tabletLandscape} {
          }

          ${mediaQueries.mobile} {
            /* font-size: 3.889vw;
            line-height: 5.833vw; */
          }
        }

        a {
          color: ${theme.colors.secondary};
          text-decoration: none;
          transition: color 0.3s ease-in-out;
        }

        #app {
          visibility: hidden;
        }

        /* HELPERS */
        .max-container {
          max-width: ${theme.maxWidth};
          margin-left: auto;
          margin-right: auto;
          ${mediaQueries.tabletLandscape} {
            width: 100%;
            padding: 0 5%;
          }
        }

        .d-block {
          display: block;
        }

        .v-hidden {
          visibility: hidden;
        }

        .hide-text {
          display: block;
          overflow: hidden;
          line-height: 1;
        }
      `}
    />
  )
}
