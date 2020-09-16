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
        pre {
          font-family: monospace;
        }
        em {
          display: inline-block;
          background: #484852;
          color: #d3ff64;
          padding: 0.2em 0.5em;
          clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
        }

        /* FONTS */

        @font-face {
          font-family: 'Gilroy';
          src: url('//db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.eot');
          src: url('//db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.eot?#iefix')
              format('embedded-opentype'),
            url('//db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.woff2')
              format('woff2'),
            url('//db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.woff')
              format('woff'),
            url('//db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.ttf')
              format('truetype'),
            url('//db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.svg#Gilroy')
              format('svg');
        }
        @font-face {
          font-family: 'Gilroy-Bold';
          src: url('//db.onlinewebfonts.com/t/1064f0ad1cb65fdab43bb592ddd8aa91.eot');
          src: url('//db.onlinewebfonts.com/t/1064f0ad1cb65fdab43bb592ddd8aa91.eot?#iefix')
              format('embedded-opentype'),
            url('//db.onlinewebfonts.com/t/1064f0ad1cb65fdab43bb592ddd8aa91.woff2')
              format('woff2'),
            url('//db.onlinewebfonts.com/t/1064f0ad1cb65fdab43bb592ddd8aa91.woff')
              format('woff'),
            url('//db.onlinewebfonts.com/t/1064f0ad1cb65fdab43bb592ddd8aa91.ttf')
              format('truetype'),
            url('//db.onlinewebfonts.com/t/1064f0ad1cb65fdab43bb592ddd8aa91.svg#Gilroy-Bold')
              format('svg');
        }

        body {
          background: ${theme.bg.main};
          color: ${theme.colors.main};

          font-family: ${theme.fonts.main};
          font-size: 0.972vw;
          font-size: clamp(1.2rem, 0.972vw, 2.8rem);
          font-style: normal;

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
          /* visibility: hidden; */
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

        .clr-second {
          color: ${theme.colors.secondary};
        }
      `}
    />
  )
}
