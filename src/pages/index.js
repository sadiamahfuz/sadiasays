import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Excerpt from "../components/Excerpt"


export default ({data}) => (
  <Layout>
  <ul style={{listStyleType: 'none'}}>
    {data.allMdx.nodes.map(node => (
      <li key={node.id}>
        <Excerpt data={node} />
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
        category
      }
      id
      fields {
        slug
      }
    }
  }
}
`
