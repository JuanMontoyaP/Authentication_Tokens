import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Header() {
  let {user} = useContext(AuthContext);
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <span> | </span>
        {user ? <p>Logout</p> : <Link to="/login">Login</Link>}
      </nav>
  
      {user && <p>Welcome {user.username}</p>}
    </header>
  );
}

export default Header;
