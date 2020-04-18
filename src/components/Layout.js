import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
  font-family: 'Alegreya Sans', sans-serif;
  color: #544951;
  font-size: 1.2rem;
`

export default ({ children}) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
)
