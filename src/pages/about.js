import React from "react"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"
import styled, { css } from "styled-components"
import { graphql } from "gatsby"
import textStyle from "../components/text.module.css"

const Button = styled.button`
  margin-top: 10px;
  background: #9d036a;
  color: white;
  border-radius: 5px;
  font-size: 1.2rem;
`

export default ({data}) => (
  <Layout noHeader>
    <h1>About {data.site.siteMetadata.title}</h1>
    <NavBar />
    <p className={textStyle.darkGrey}>{data.site.siteMetadata.description}</p>
    <p className={textStyle.darkGrey}>Made with love by {data.site.siteMetadata.author}.</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
