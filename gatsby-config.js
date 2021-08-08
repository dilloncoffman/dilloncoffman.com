require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `dillon coffman`,
    titleTemplate: `%s | Dillon Coffman`,
    description: `Dillon Coffman is a developer who loves to push the limit and work with cutting-edge technology. Recently out of university, Dillon is excited to work alongside others to build apps that make a difference. In his free time he enjoys playing guitar and reading about everything from how to bootstrap a startup business to ancient philosophy. ~ Totally Real 3rd Person`,
    twitterUsername: `@_DillonCoffman_`,
    image: `https://pbs.twimg.com/profile_images/1266034010901397506/RSZmaVNL_400x400.jpg`,
    url: `https://www.dilloncoffman.com`,
  },
  flags: {
    DEV_SSR: false, // https://github.com/gatsbyjs/gatsby/discussions/28138
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-172408693-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/content/blog-posts`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 500,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dillon Coffman`,
        short_name: `Dillon Coffman`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: [process.env.GATSBY_YOUTUBE_CHANNEL_ID],
        apiKey: process.env.GATSBY_YOUTUBE_API_KEY,
        maxVideos: 500,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
