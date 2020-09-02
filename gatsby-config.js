const post = require('./src/schemas/post.json')
const category = require('./src/schemas/category.json')

module.exports = {
  siteMetadata: {
    title: `Johan Petrikovsky`,
    description: `Site internet de Johan Petrikovsky, développeur front-end à Toulouse.`,
    author: `@kovskyD`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
            variants: [`200`, `400`],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto Mono:400'],
        },
      },
    },
    {
      resolve: '@willthevideoman/gatsby-plugin-ackee-tracker',
      options: {
        // Domatin ID found when adding a domain in the admin panel.
        domainId: 'e35ba5a9-5290-4fd2-bf34-901d049b4462',
        // URL to Server eg: "https://analytics.test.com".
        server: 'https://ackee-dev-blog.herokuapp.com',
        // Disabled analytic tracking when running localy
        ignoreLocalhost: true,
        // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
        detailed: true,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'kovsky-blog',
        // accessToken: `${process.env.API_KEY}`,
        accessToken: `MC5YYXhab1JJQUFDTUF4Qm0y.VO-_ve-_vS3vv73vv70BN--_ve-_ve-_vTHvv70M77-977-9GRtVDxNp77-9W3vvv70lSO-_vUFb77-9`,
        // Get the correct URLs in blog posts
        linkResolver: () => blogpost => `/${blogpost.uid}`,
        lang: 'fr-fr',
        schemas: {
          post,
          category,
        },
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
        icon: `src/images/favicon/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
