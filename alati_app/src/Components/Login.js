import React from 'react';
import Card from "./Card";
import './Login.css';

function Login(props) {
  const [loginForm, setLoginForm] = React.useState({ username: '', password: ''});
  const [error, setError] = React.useState('');

  function onChange(event) {
    const {name, value} = event.target;
    setLoginForm(oldForm => ({...oldForm, [name]: value}))
  }

  function onSubmit(e) {
    e.preventDefault();
    setError("");
    const body = `username=${loginForm.username}&password=${loginForm.password}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    };
    fetch('/login', options)
      .then(response => {
        if (response.status === 401) {
          setError("Login failed");
        } else {
          props.onLogin();
        }
      });
  }

  return (
    <Card>
      <div className="Login">
        <form onSubmit={onSubmit}>
          <div className="FormRow">
            <label>Username</label>
            <input name='username' onChange={onChange} value={loginForm.username}/>
          </div>
          <div className="FormRow">
            <label>Password</label>
            <input name='password' type="password" onChange={onChange} value={loginForm.password}/>
          </div>
          <div className='error'>{error}</div>
          <button type="submit">Login</button>
          <button type="button">Register</button>
        </form>
      </div>
    </Card>
  )
}

export default Login;



