import React from 'react';

const Login = () => {
  return (
    <div>
    <h2>Login</h2>
      <from>
     
        <input type="text" placeholder="Enter Your Email" /> <br />
        <input type="password" placeholder="Enter Your Password" /> <br />
        <input type="submit" value="Submit" />
      </from>
      <div>---------or----------</div>
      <button>Google Sing In</button>
    </div>
  );
};

export default Login;