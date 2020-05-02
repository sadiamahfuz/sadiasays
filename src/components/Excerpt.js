import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

function handleClick(url) {
  console.log(url);
  navigate(url);
}

export default ({ data }) => {
  return (
    <div onClick={() => handleClick(data.fields.slug)} style={{cursor: 'pointer'}}>
      <h4>{data.frontmatter.title}</h4>
      <p>{data.frontmatter.date}</p>
      <p>{data.excerpt}</p>
    </div>
  )
}
