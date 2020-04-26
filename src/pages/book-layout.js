import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

export default ({ data: { mdx } }) => {
  return (
    <Layout>
      {/*<h1>{mdx.frontmatter.title}</h1>*/}
      <p>{mdx.frontmatter.date}</p>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BookPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "DD MMM YYYY")
        title
        rating
      }
      id
    }
  }
`
