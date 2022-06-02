import React from 'react';
// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

function Header() {
  // const { name } = useContext(AuthContext);
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/login">Login</Link>
      </nav>
      {/* <p>
        {name}
      </p> */}
    </header>
  );
}

export default Header;
