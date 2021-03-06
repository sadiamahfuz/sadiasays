import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = styled(props => <Link {...props} />)`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 1.2rem;
  padding: 0.2rem;
  text-decoration: none;
  color: #9d036a;
`


export default () => (
  <div>
    <NavLink to="/">HOME</NavLink>{"   "}
    <NavLink to="/book">BOOK</NavLink>{"   "}
    <NavLink to="/tech">TECH</NavLink>{"   "}
  </div>
)
