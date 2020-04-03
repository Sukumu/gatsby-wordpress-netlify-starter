module.exports = {
  siteMetadata: {
    title: `Healthy Wealthy Me`,
    author: `healthywealthyme.com`,
    description: `a Place for Health, Wealth and Spiritual advice and tips`,
    siteUrl: WORDPRESS_URL,
    social: {
      twitter: TWITTER_SITE,
    },
    postPrefix : '/blog',
    pagePrefix: '',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: BASE_URL,
        // baseUrl: 'data.sukumu.com',
        // baseUrl: 'wpgatsby.wtf',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
        excludedRoutes: [
          "/*/*/comments",
          "/yoast/**",
          "/oembed/*"
        ],
        normalizer: function({ entities }) {
          return entities
        },
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
