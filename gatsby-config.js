const post = require('./src/schemas/post.json')
const category = require('./src/schemas/category.json')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Développeur Web à Toulouse.`,
    description: `Site internet de Johan Petrikovsky, développeur front-end à Toulouse.`,
    author: `@kovskyD`,
    siteUrl: `https://www.developpeur-web.tech`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-preact`,
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /assets/,
      },
    },
    'gatsby-plugin-sitemap',
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
        repositoryName: `${process.env.PRISMIC_REPOSITORY_NAME}`,
        accessToken: `${process.env.API_KEY}`,
        // Get the correct URLs in blog posts
        linkResolver: ({ node }) => blogpost =>
          `/blog/${node.data.categories[0].category.uid}/${blogpost.uid}`,
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
        background_color: `#fff700`,
        theme_color: `#fff700`,
        display: `minimal-ui`,
        icon: `src/images/favicon/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
