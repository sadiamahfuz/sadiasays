module.exports = {
  siteMetadata: {
    title: "Sadia Says",
    description: "Sadia has a lot to say!",
    author: "Sadia Mahfuz",
    year: "2020"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`tech`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/pages/markdownpage-template.js")
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-styled-components`
  ],
}
