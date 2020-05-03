import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

const Excerpt = styled.div`
  cursor: pointer;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const Category = styled.div`
  text-transform: uppercase;
  font-size: 0.9rem;
  color: #9d929b;
`

const Title = styled.h3`
  margin: 0;
  text-transform: capitalize;
  color: #9d036a;
`

const Date = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #9d929b;
`

const Details = styled.p`
  margin-top: 1rem;
  margin-bottom: 0;
  font-size: 1rem;
`

function handleClick(url) {
  navigate(url);
}

export default ({ data }) => {
  return (
    <Excerpt onClick={() => handleClick(data.fields.slug)}>
      <Category>{data.frontmatter.category}</Category>
      <Title>{data.frontmatter.title}</Title>
      <Details>{data.excerpt}</Details>
      <Date>{data.frontmatter.date}</Date>
    </Excerpt>
  )
}
