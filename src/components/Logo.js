import React from "react"
import styled from "styled-components"
import logo from "../../static/SadiaSaysTransparent.png"

const Logo = styled.img`
  max-width: 145px;
`;

export default () => (
  <div>
    <Logo src={logo} alt="Logo" />
  </div>
);
