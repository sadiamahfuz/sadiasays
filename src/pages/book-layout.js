import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

export default ({ data: { mdx } }) => {
  return (
    <Layout>
      <h3>{mdx.frontmatter.title}</h3>
      <h3>{mdx.frontmatter.date}</h3>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <p>{mdx.frontmatter.tags}</p>
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
        tags
      }
      id
    }
  }
`
