import React from 'react';
  import {Link} from "react-router-dom";
  import "./Header.css";

function Header(props) {

  function logout() {
    fetch("/logout").then(() => {
      props.onLogout();
    });
  }

  return (
    <header className="Header">
      <Link to='/home'>HOME</Link>
      <Link to='/forum'>FORUM</Link>
      <button onClick={logout}>LOGOUT</button>
    </header>
  )
}

export default Header;
