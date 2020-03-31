import React from "react"
import Layout from "../components/Layout"
import textStyle from "../components/text.module.css"

export default ({data}) => (
  <Layout className={textStyle.darkGrey}>
    <p className={textStyle.darkGrey}>Welcome to Sadia says!</p>
    <p className={textStyle.darkGrey}>Last built on {data.site.buildTime}</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm:ss")
    }
  }
`
