import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext'

function LoginPage() {
  let {loginUser} = useContext(AuthContext)
  console.log('context', loginUser);
  return (
    <div>
      <form onSubmit={loginUser} >
        <input type="text" name="username" placeholder="Enter your username" />
        <input type="password" name="password" placeholder="Enter your password" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginPage;
