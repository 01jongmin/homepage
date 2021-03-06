const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "Home",
    titleTemplate: "%s - Jong Min Choi",
    description: `Jong Min Choi's Homepage`,
    author: `Jong Min Choi`,
    siteUrl: `https://www.jongmin.space`,
    twitterUsername: "@01jongmin",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-173634546-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        icon: "src/images/favicon.png",
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images",
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-resolve-src",
  ],
};
