import React, { useState } from 'react';
import Login from './components/LoginPage/index.js';
import Home from './components/Home/index.js';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {!loggedIn ? (
        <Login onLogin={setLoggedIn} />
      ) : (
        <Home onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;

