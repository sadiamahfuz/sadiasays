import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import textStyle from "../components/text.module.css"

export default ({data}) => (
  <Layout>
    <p className={textStyle.darkGrey}>{data.site.siteMetadata.description}</p>
    <p className={textStyle.darkGrey}>Last updated on {data.site.buildTime}</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm:ss")
      siteMetadata {
        title
        description
      }
    }
  }
`
