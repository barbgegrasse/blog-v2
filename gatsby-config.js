require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Johan Petrikovsky`,
    description: `Site internet de Johan Petrikovsky, apprenti développeur.`,
    author: `@kovskyD`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['IBM Plex Mono:200,400', 'Roboto Mono:400'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.jsx`),
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'kovsky-blog',
        // accessToken: `${process.env.API_KEY}`,
        accessToken: `MC5YYXhab1JJQUFDTUF4Qm0y.VO-_ve-_vS3vv73vv70BN--_ve-_ve-_vTHvv70M77-977-9GRtVDxNp77-9W3vvv70lSO-_vUFb77-9`,
        // Get the correct URLs in blog posts
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://developpeurwebtech.matomo.cloud/',
        siteUrl: 'https://www.developpeur-web.tech/',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
