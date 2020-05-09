import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const FooterContainer = styled.div`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 0.7rem;
  position: fixed;
  bottom: 10;
  margin: 0;
  color: #9d929b;
`

export default () => {
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          author
          year
        }
      }
    }`
  )

  return (
  <FooterContainer>
    <p>Made with love by {data.site.siteMetadata.author}, {data.site.siteMetadata.year}</p>
  </FooterContainer>
)}
