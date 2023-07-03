import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // try {
  //   //   const response = await axios.post('/api/login', { username, password });
  //   //   const token = response.data.token;
  //   //   // Store the token in local storage or a state management solution
  //   //   console.log('Login successful:', token);
  //   // } catch (error) {
  //   //   console.error(error.response.data);
  //   // }
  // };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={""}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
