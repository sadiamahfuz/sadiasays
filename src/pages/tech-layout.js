import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

export default ({ data: { mdx } }) => {
  return (
    <Layout>
      <h2>{mdx.frontmatter.title}</h2>
      <p>{mdx.frontmatter.date}</p>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TechPageQuery($id: String) {
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
