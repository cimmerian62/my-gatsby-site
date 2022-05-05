module.exports = {
    siteMetadata: {
      title: `My Gatsby Site`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    pathPrefix: "/my-gatsby-site",
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        },
      },
      "gatsby-plugin-mdx",
      "gatsby-transformer-sharp",
      "gatsby-plugin-styled-components",
    ]
}