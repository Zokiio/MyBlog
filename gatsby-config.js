if (process.env.ENVIROMENT !== "production") {
  require("dotenv").config()
}

module.exports = {
  siteMetadata: {
    title: `Zottik`,
    description: `Hey! This is Zokiios little hangout!`,
    author: `@Zokiio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URI
          ? "https://zottik-app.herokuapp.com"
          : "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "articles",
          "categories",
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-transformer-cloudinary",
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zottik`,
        short_name: `zottik`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
