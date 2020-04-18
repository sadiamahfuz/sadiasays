import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"


export default ({data}) => (
  <Layout>
  <ul>
    {data.allMdx.nodes.map(node => (
      <li key={node.id}>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link> (
        {node.frontmatter.date}) - {node.excerpt}
      </li>
    ))}
  </ul>
  </Layout>
)

export const query = graphql`
  query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      excerpt
      frontmatter {
        date(formatString: "DD MMM YYYY")
        title
        tags
      }
      id
      fields {
        slug
      }
    }
  }
}
`
