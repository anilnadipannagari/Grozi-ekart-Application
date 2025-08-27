import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Make sure this path is correct

import SignUp from './components/SignUp';
import Login from './components/Login';
import AuthDetails from './components/AuthDetails';
import './App.css';

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      listen();
    };
  }, []);

  return (
    <div className="App">
      {authUser ? (
        // If user is logged in, show a welcome message and sign out button
        <AuthDetails />
      ) : (
        // If user is logged out, show the login and signup forms
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <SignUp />
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
