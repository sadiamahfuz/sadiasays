import React from "react"
import Logo from "./Logo"
import NavBar from "../components/NavBar"
import styled from "styled-components"

const Header = styled.div`
  font-family: 'Alegreya Sans', sans-serif;
  color: #9d036a;
  display: flex;
  justify-content: space-between;
`


export default () => (
  <Header>
    <Logo />
    <NavBar />
  </Header>
)
