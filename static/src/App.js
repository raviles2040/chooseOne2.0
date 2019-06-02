import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Scenes/Login/Login';
import RandomQuestions from './Scenes/LoadQuestions/RandomQuestions'

function App() {
  return (
    <div className="App">
      <RandomQuestions/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
