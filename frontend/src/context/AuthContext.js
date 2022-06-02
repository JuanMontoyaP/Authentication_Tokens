import React, { createContext } from 'react';

const AuthContext = createContext();

export default AuthContext;

export function AuthProvider({ children }) {

  // const [authTokens, setAuthTokens] = useState(null);
  // const [user, setUser] = useState(null);

  let loginUser = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // const response = away fetch('http://127.0.0.1:8000/api/token/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username: null, password: null }),
    // });
  };

  const contextData = {
    loginUser: loginUser,
  };

  return (
    <AuthContext.Provider value={ contextData }>
      {children}
    </AuthContext.Provider>
  );
}
