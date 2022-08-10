import React from 'react';
import {  useAuth } from '../../providers/auth';
import Login from '../login/Login';
import Outro from '../outro/outro';
function App() {
  const {user, setUser} = useAuth();
  console.log(user)
  return (
    <div className="App">
     
      <hr />
      <Login />
      <Outro />

    </div>
  );
}

export default App;
