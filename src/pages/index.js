import React from 'react';
import styled from 'styled-components';
import logo from '../images/SadiaSays.png';

import { useSiteMetadata } from '../hooks/useSiteMetadata';

const StyledH1 = styled.h1`
  color: #9d036a;
`;

export default () => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <img src={logo} alt="Sadia Says" />
      <StyledH1> {title} </StyledH1>
      <p> {description} </p>
    </div>
  )
};
