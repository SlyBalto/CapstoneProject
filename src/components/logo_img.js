import React from 'react';
import { Link } from 'react-router-dom';

function LogoImg() {
  return (
    <Link style={{padding: "0px"}} to="/">
      <img style={{ height: '60px' }} src="logo-wide.png" alt="Little Lemon logo" aria-label='Little Lemon Homepage'/>
    </Link>
  );
}

export default LogoImg;
