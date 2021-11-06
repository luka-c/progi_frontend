import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header';
import Login from './Components/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loadingUser, setLoadingUser] = React.useState(true);

  React.useEffect(() => {
    fetch("/user")
      .then(response => {
         if (response.status !== 401) {
           setLoadingUser(false);
           setIsLoggedIn(true);
         } else {
           setLoadingUser(false);
         }
       })
  }, []);

  if (loadingUser) {
    return <div>Loading...</div>
  }

  function onLogin() {
    setIsLoggedIn(true)
  }

  function onLogut() {
    setIsLoggedIn(false);
  }

  if (!isLoggedIn) {
    return (
      <div className="App">
        <Login onLogin={onLogin}/>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Header onLogout={onLogut}/>
      <div className="App">
        Pozdrav Svijete!
      </div>
    </BrowserRouter>

  );
}

export default App;
