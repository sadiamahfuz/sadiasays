import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

const Excerpt = styled.div`
`

const Category = styled.div`
  text-transform: uppercase;
  font-size: 0.8rem;
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

const Thumbnail = styled.img`
  max-height: 100px;
  display: inline-block;
  align-self: flex-end;
`

const ExcerptWithThumbnail = styled.div`
  cursor: pointer;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`

function handleClick(url) {
  navigate(url);
}

export default ({ data }) => {
  const image = require("../../content/" + data.frontmatter.thumbnail.relativePath);
  return (
    <ExcerptWithThumbnail onClick={() => handleClick(data.fields.slug)}>
      <Excerpt>
        <Category>{data.frontmatter.category}</Category>
        <Title>{data.frontmatter.title}</Title>
        <Details>{data.excerpt}</Details>
        <Date>{data.frontmatter.date}</Date>
      </Excerpt>
      <Thumbnail src={image} alt="image" />
    </ExcerptWithThumbnail>
  )
}
