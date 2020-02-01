import { Link } from 'gatsby';
import React from 'react';
import logo from '../images/SadiaSays.png';

export const Header = ({ siteTitle, siteDescription }) => (
  <div>
    <img src={logo} alt="Sadia Says" />
    <Link to="/">
      <h1>{siteTitle}</h1>
      <p>{siteDescription}</p>
    </Link>
  </div>
);
