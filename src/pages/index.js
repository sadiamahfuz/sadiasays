import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <p>Welcome to Sadia says!</p>
    <p>Last built on {data.site.buildTime}</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm:ss")
    }
  }
`
