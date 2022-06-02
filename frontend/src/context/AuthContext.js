import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export default AuthContext;

export function AuthProvider({ children }) {

  let [authTokens, setAuthTokens] = useState(null);
  let [user, setUser] = useState(null);

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: e.target.username.value, password: e.target.password.value }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data.token);
      setUser(jwt_decode(data.access));
    } else {
      alert('Something went wrong');
    }
  };

  const contextData = {
    user:user,
    loginUser: loginUser
  };

  return (
    <AuthContext.Provider value={ contextData }>
      {children}
    </AuthContext.Provider>
  );
}
