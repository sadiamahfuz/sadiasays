import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import styled from "styled-components"

const Title = styled.h3`
  color: #9d036a;
  margin-bottom: 0;
  text-transform: capitalize;
`

const Date = styled.p`
  margin-top: 0;
  color: #9d929b;
  font-size: 0.9rem;
`

const Rating = styled.p`
  color: #9d036a;
`

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export default ({ data: { mdx } }) => {
  const image = require("../../content/" + mdx.frontmatter.thumbnail.relativePath);
  return (
    <Layout>
      <Title>{mdx.frontmatter.title}</Title>
      <Date>{mdx.frontmatter.date}</Date>
      {mdx.frontmatter.rating ? <Rating>RATING: {mdx.frontmatter.rating} / 5</Rating> : null}
      <Image src={image} alt="image" />
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
        rating
        thumbnail {
          relativePath
        }
      }
      id
    }
  }
`
