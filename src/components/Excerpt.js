import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { withStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";

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
  margin-top: 0.5rem;
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
  console.log(url);
  navigate(url);
}

const StyledRating = withStyles({
  iconFilled: {
    color: '#9d036a'
  },
  iconEmpty: {
    color: '#9d929b'
  }
})(Rating);

export default ({ data }) => {
  const image = require("../../content/" + data.frontmatter.thumbnail.relativePath);
  return (
    <ExcerptWithThumbnail onClick={() => handleClick(data.fields.slug)}>
      <Excerpt>
        <Category>{data.frontmatter.category}</Category>
        <Title>{data.frontmatter.title}</Title>
        {data.frontmatter.rating ? <StyledRating defaultValue={data.frontmatter.rating} readOnly={true} size="small"/> : null}
        <Details>{data.excerpt}</Details>
        <Date>{data.frontmatter.date}</Date>
      </Excerpt>
      <Thumbnail src={image} alt="image" />
    </ExcerptWithThumbnail>
  )
}
