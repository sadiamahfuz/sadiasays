import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
  font-family: 'Alegreya Sans', sans-serif;
  color: #9d036a;
`

export default ({ children, noHeader}) => (
  <Container>
    {!noHeader && <Header />}
    <NavBar />
    {children}
    <Footer />
  </Container>
)
