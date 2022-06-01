import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
