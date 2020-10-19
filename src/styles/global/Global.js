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
          color: ${theme.colors.main};
          font-size: 1em;
          padding: 0.2em 0.5em;
          clip-path: polygon(
            0.2em 0%,
            100% 0%,
            calc(100% - 0.2em) 100%,
            0% 100%
          );
        }

        /* FONTS */
        @font-face {
          font-family: 'Gilroy';
          src: url('//db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.eot');
          src: url('//db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/gilroy/gilroy.woff2') format('woff'),
            url('/fonts/gilroy/gilroy.woff') format('woff'),
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
            url('/fonts/gilroy/gilroy-extrabold.woff2') format('woff2'),
            url('/fonts/gilroy/gilroy-extrabold.woff') format('woff'),
            url('//db.onlinewebfonts.com/t/1064f0ad1cb65fdab43bb592ddd8aa91.ttf')
              format('truetype'),
            url('//db.onlinewebfonts.com/t/1064f0ad1cb65fdab43bb592ddd8aa91.svg#Gilroy-Bold')
              format('svg');
        }

        html::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        html::-webkit-scrollbar-thumb {
          background: ${theme.colors.primary};

          box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
            inset -2px -2px 2px rgba(0, 0, 0, 0.25);
        }
        html::-webkit-scrollbar-track {
          background: linear-gradient(
            90deg,
            #201c29,
            #201c29 1px,
            #100e17 0,
            #100e17
          );
        }

        /* LOCOMOTIVE */
        /*! locomotive-scroll v3.5.4 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
        html.has-scroll-smooth {
          overflow: hidden;
        }

        html.has-scroll-dragging {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .has-scroll-smooth body {
          overflow: hidden;
        }

        /* Specifying the scroll container manually */
        .has-scroll-smooth #___gatsby,
        .has-scroll-smooth [data-scroll-container] {
          min-height: 100vh;
        }

        .c-scrollbar {
          position: absolute;
          right: 0;
          top: 0;
          width: 11px;
          height: 100vh;
          transform-origin: center right;
          transition: transform 0.3s, opacity 0.3s;
          opacity: 0;
        }
        .c-scrollbar:hover {
          transform: scaleX(1.45);
        }
        .c-scrollbar:hover,
        .has-scroll-scrolling .c-scrollbar,
        .has-scroll-dragging .c-scrollbar {
          opacity: 1;
        }

        .c-scrollbar_thumb {
          position: absolute;
          top: 0;
          right: 0;
          background-color: ${theme.colors.primary};
          opacity: 0.5;
          width: 7px;
          border-radius: 10px;
          margin: 2px;
          cursor: -webkit-grab;
          cursor: grab;
        }
        .has-scroll-dragging .c-scrollbar_thumb {
          cursor: -webkit-grabbing;
          cursor: grabbing;
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

        strong {
          font-family: ${theme.fonts.title};
          font-size: 1.05em;
          color: ${theme.colors.primary};
        }

        a {
          color: ${theme.colors.primary};
          text-decoration: none;
          transition: color 0.3s ease-in-out;
        }

        /*Gatsby transition */
        .tl-edges {
          overflow-x: initial;
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

        .o-hidden {
          overflow: hidden;
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
