import React from 'react';
import logo from '../images/SadiaSays.png';

import { useSiteMetadata } from '../hooks/useSiteMetadata';

export default () => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <img src={logo} alt="Sadia Says" />
      <h1> {title} </h1>
      <p> {description} </p>
    </div>
  )
};
