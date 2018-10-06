import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1><Link to='/'>Hello!</Link></h1>
    </header>
  );
};

export default Header;
